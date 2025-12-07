const os = require("os");
const path = require("path");
const fs = require("fs/promises");
const childProcess = require("child_process");

const cwd = process.cwd(), tmp = os.tmpdir();

function execPromise(cmd, cwd) {
    let grs, grj;
    let p = new Promise((rs, rj) => {
        grs = rs; grj = rj;
    });
    childProcess.exec(cmd, { cwd, shell: true }, (e, stdout, stderr) => {
        if (e) return grj([stdout, stderr, e]);
        return grs([stdout, stderr]);
    });
    return p;
}

(async () => {

    await execPromise("git config --global user.name 'github-actions[bot]'");
    await execPromise("git config --global user.email 'github-actions[bot]@users.noreply.github.com'");
    await execPromise("git config --global alias.rm-deleted '!git rm $(git ls-files --deleted)'");

    const repoPath = path.join(tmp, "crepo0");

    await execPromise(`git clone https://github.com/kudodzzz/kudodzzz.github.io.git ${repoPath}`);

    await execPromise(
        `git remote set-url origin https://x-access-token:${process.env.GITHUB_TOKEN}@github.com/kudodzzz/kudodzzz.github.io.git`,
        repoPath
    );

    await fs.rm(path.join(repoPath, "docs", "landing-assets"), { recursive: true }).catch(() => {});
    await fs.cp(path.join(cwd, "dist", "landing-assets"), path.join(repoPath, "docs", "landing-assets"), { recursive: true });

    await fs.cp(path.join(cwd, "dist", "index.html"), path.join(repoPath, "docs", "index.html"));

    let commit = (await execPromise("git rev-parse --short HEAD", cwd))[0].trim();
    let version = require("../package.json").version;

    await execPromise("git add .", repoPath);
    try {
        await execPromise("git rm-deleted", repoPath);
    } catch {}

    await execPromise(`git commit -m "Publish automatic ${version}+${commit}"`, repoPath);
    await execPromise("git push", repoPath);

    await fs.rm(repoPath, { recursive: true });
})().catch(x => {
    console.log("Failed!", x);
    process.exit(1);
});
