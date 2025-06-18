import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Main />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
