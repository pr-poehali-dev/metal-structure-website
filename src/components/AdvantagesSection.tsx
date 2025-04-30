
import { CheckCircle } from "lucide-react";

const advantages = [
  {
    title: "Собственное производство",
    description: "Полный производственный цикл на собственных мощностях позволяет контролировать качество на всех этапах"
  },
  {
    title: "Опытная команда",
    description: "Команда инженеров и специалистов с опытом работы более 15 лет в сфере металлоконструкций"
  },
  {
    title: "Современное оборудование",
    description: "Используем высокоточное оборудование от ведущих производителей для обеспечения высокого качества продукции"
  },
  {
    title: "Соблюдение сроков",
    description: "Четкое планирование производства и монтажа гарантирует выполнение проектов в срок"
  },
  {
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все виды работ и готовые изделия от 3 до 5 лет"
  },
  {
    title: "Индивидуальный подход",
    description: "Разрабатываем решения под требования конкретного заказчика и специфику объекта"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы стремимся предоставить лучший сервис и качество, которые выделяют нас среди конкурентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="text-secondary h-6 w-6 mt-1 flex-shrink-0" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
