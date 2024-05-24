// image
import noUser from "../../assets/user-no-image.webp";

function AppBar() {
  return (
    <header className="w-[99%] h-15 rounded-md backdrop-blur-lg bg-primary/70 fixed top-3 left-[50%] -translate-x-[50%]">
      <div className="flex items-center justify-start h-full w-full px-3 gap-3">
        <img className="w-10 rounded-full" src={noUser} alt="user-image" />
        <h1 className="font-bold text-4xl text-plight logo">IMC Calculator</h1>
      </div>
    </header>
  );
}

export default AppBar;
