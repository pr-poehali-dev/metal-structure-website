
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Оставьте заявку, и наши специалисты свяжутся с вами для обсуждения вашего проекта
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Электронная почта
                </label>
                <Input id="email" type="email" placeholder="example@email.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о вашем проекте" 
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto bg-secondary hover:bg-secondary/90">
                Отправить заявку
              </Button>
            </form>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mt-1 mr-4" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+74951234567" className="text-gray-600 hover:text-secondary story-link">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mt-1 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@metallstroy.ru" className="text-gray-600 hover:text-secondary story-link">
                    info@metallstroy.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mt-1 mr-4" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <address className="not-italic text-gray-600">
                    г. Москва, ул. Промышленная, д. 12
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-medium mb-2">Время работы</p>
              <p className="text-gray-600">
                Пн-Пт: 9:00 — 18:00<br />
                Сб-Вс: Выходной
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
