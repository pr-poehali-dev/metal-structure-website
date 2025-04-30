
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Изготовление металлоконструкций",
    description: "Производим металлоконструкции любой сложности по чертежам заказчика или разрабатываем проект с нуля.",
    icon: "🏭",
    link: "/services/manufacturing"
  },
  {
    title: "Монтаж металлоконструкций",
    description: "Выполняем профессиональный монтаж с соблюдением всех строительных норм и стандартов безопасности.",
    icon: "🔧",
    link: "/services/installation"
  },
  {
    title: "Сварочные работы",
    description: "Предоставляем услуги сварки различных типов металлов с использованием современного оборудования.",
    icon: "⚡",
    link: "/services/welding"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг в области металлоконструкций — от проектирования и изготовления до монтажа и сервисного обслуживания.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to={service.link}>Подробнее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
