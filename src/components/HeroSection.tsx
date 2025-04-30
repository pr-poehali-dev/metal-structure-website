
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Затемнение */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container mx-auto z-10 px-4">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Производство металлоконструкций <br className="hidden sm:block" />
            любой сложности
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Полный цикл работ от проектирования до монтажа.
            Современное оборудование и профессиональная команда.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              <Link to="/contacts">Обсудить проект</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/projects">Наши работы</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
