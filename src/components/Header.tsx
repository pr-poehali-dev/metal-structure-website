
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/favicon.svg" alt="Логотип" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">МеталлСтрой</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <Link to="/" className="text-white hover:text-secondary px-4 py-2">
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white hover:text-secondary">
                Услуги
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects" className="text-white hover:text-secondary px-4 py-2">
                Проекты
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className="text-white hover:text-secondary px-4 py-2">
                О компании
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contacts" className="text-white hover:text-secondary px-4 py-2">
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="md:hidden">
          {/* Мобильное меню - можно добавить позже */}
        </div>
        
        <div className="hidden md:block">
          <a href="tel:+74951234567" className="text-white hover:text-secondary">
            +7 (495) 123-45-67
          </a>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const services = [
  {
    title: "Изготовление металлоконструкций",
    href: "/services/manufacturing",
    description: "Проектирование и производство металлоконструкций любой сложности"
  },
  {
    title: "Монтаж металлоконструкций",
    href: "/services/installation",
    description: "Профессиональный монтаж металлоконструкций с гарантией качества"
  },
  {
    title: "Сварочные работы",
    href: "/services/welding",
    description: "Все виды сварочных работ с использованием современного оборудования"
  },
  {
    title: "Металлообработка",
    href: "/services/metalworking",
    description: "Точная обработка металла с применением ЧПУ-станков"
  },
];

export default Header;
