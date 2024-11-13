import { useState } from "react";
import Link from "next/link";
import { ChevronDown, X, Menu } from "lucide-react";
import { navigationSections } from "@/data/navigation";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const onToggleNav = () => {
    setNavShow((status) => {
      document.body.style.overflow = !status ? "hidden" : "auto";
      return !status;
    });
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(current =>
      current.includes(sectionId)
        ? current.filter(id => id !== sectionId)
        : [...current, sectionId]
    );
  };

  const renderMobileNavItems = (section: any) => {
    const isExpanded = expandedSections.includes(section.id);

    if (section.type === 'dropdown') {
      return (
        <div key={section.id} className="border-b border-gray-200">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex w-full items-center justify-between px-6 py-4 hover:bg-gray-50"
          >
            <span className="text-lg font-semibold text-gray-800">
              {section.title}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
                }`}
            />
          </button>
          {isExpanded && (
            <div className="bg-gray-50">
              {section.items.map((item: any) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-l-4 border-transparent px-6 py-3 hover:border-blue-500 hover:bg-blue-50"
                  onClick={onToggleNav}
                >
                  <div className="flex items-center gap-3">
                    {item.icon && (
                      <item.icon className="h-5 w-5 text-blue-600" />
                    )}
                    <div>
                      <div className="font-medium text-gray-800">
                        {item.title}
                      </div>
                      {item.description && (
                        <div className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (section.type === 'links') {
      return section.items.map((link: any) => (
        <div key={link.href} className="border-b border-gray-200">
          <Link
            href={link.href}
            className="block px-6 py-4 text-lg font-medium text-gray-800 hover:bg-gray-50"
            onClick={onToggleNav}
          >
            {link.title}
          </Link>
        </div>
      ));
    }
  };

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded p-1 hover:bg-gray-100"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <Menu className="h-full w-full text-neutral-300" />
      </button>

      <div
        className={`fixed left-0 top-0 z-50 h-full w-full transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${navShow ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div className="text-xl font-bold text-gray-800">Menú</div>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Cerrar menú"
            onClick={onToggleNav}
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="h-[calc(100vh-4rem)] overflow-y-auto pb-20">
          {navigationSections.map(section => renderMobileNavItems(section))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;