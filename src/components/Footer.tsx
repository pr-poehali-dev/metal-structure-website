
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">МеталлСтрой</h3>
            <p className="text-gray-300">
              Производство и монтаж металлоконструкций любой сложности с 2005 года.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Услуги</h3>
            <ul className="space-y-2">
              {['Изготовление металлоконструкций', 'Монтаж металлоконструкций', 
                'Сварочные работы', 'Металлообработка'].map((service, index) => (
                <li key={index}>
                  <Link to={`/services/${index + 1}`} className="text-gray-300 hover:text-secondary">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Информация</h3>
            <ul className="space-y-2">
              {[
                { name: 'О компании', path: '/about' },
                { name: 'Проекты', path: '/projects' },
                { name: 'Контакты', path: '/contacts' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-300 hover:text-secondary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Контакты</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">г. Москва, ул. Промышленная, д. 12</p>
              <p className="mb-2">
                <a href="tel:+74951234567" className="hover:text-secondary">
                  +7 (495) 123-45-67
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:info@metallstroy.ru" className="hover:text-secondary">
                  info@metallstroy.ru
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} МеталлСтрой. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
