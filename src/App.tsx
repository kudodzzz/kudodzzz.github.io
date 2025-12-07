import cls from "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageHome from "./pages/Home";

function App({ type }: { type: "main" }) {
    return (
        <div className={cls.Layout}>
            <Header type={type} />
            <div className={cls.Container}>
                {(() => {
                    switch (type) {
                        case "main": return <PageHome />;
                        default: return <></>;
                    }
                })()}
            </div>
            <Footer />
        </div>
    )
}

export default App
