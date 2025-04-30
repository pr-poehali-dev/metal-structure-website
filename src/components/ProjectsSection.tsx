
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Производственный комплекс",
    category: "Промышленные здания",
    image: "https://images.unsplash.com/photo-1604754742629-3e0498165271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Спортивный центр",
    category: "Общественные здания",
    image: "https://images.unsplash.com/photo-1564995654891-7e77e308c56b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Торговый центр",
    category: "Коммерческие здания",
    image: "https://images.unsplash.com/photo-1553525553-f373197ddb1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            За годы работы мы реализовали множество проектов различной сложности и масштаба.
            Ознакомьтесь с некоторыми из наших работ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md hover-scale">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-sm text-gray-300 mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link to="/projects">Смотреть все проекты</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
