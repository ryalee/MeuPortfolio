import About from "./sections/About";
import Header from "./components/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="flex flex-col gap-20 container mx-auto px-8 ">
        <Header />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
