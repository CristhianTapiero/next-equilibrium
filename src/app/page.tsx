import { BiChevronRight } from "react-icons/bi";
const HomePage = () => {
  return (
    <div className="main-container gap-y-4">
      <h1 className="text-7xl font-bold text-eq_green-100">EQUILIBRIUM</h1>
      <p className="text-2xl font-semibold text-eq_neutral-500">Bienvenido a equilibrium centro de cuidado integral</p>
      <a href="/servicios" className="btn-ghost group transition-all">Ver servicios <BiChevronRight className="group-hover:translate-x-1 text-xl transition-all" /></a>
    </div>
  );
}

export default HomePage;