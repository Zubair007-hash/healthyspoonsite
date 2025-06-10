
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Coffee, Soup, Pizza } from "lucide-react";

const MenuSection = () => {
  const menuCategories = [
    {
      title: "Daily Snacks",
      icon: Utensils,
      color: "from-orange-400 to-orange-600",
      badgeColor: "bg-orange-100 text-orange-800",
      items: [
        { name: "Singara (সিঙাড়া)", description: "Classic potato-filled pastry", price: "৳10" },
        { name: "Samucha (সামুচা)", description: "Crispy vegetable pastry", price: "৳10" },
        { name: "Alur Chop (আলুর চপ)", description: "Spiced potato fritters", price: "৳10" }
      ]
    },
    {
      title: "Street Food",
      icon: Coffee,
      color: "from-red-400 to-red-600",
      badgeColor: "bg-red-100 text-red-800",
      items: [
        { name: "Fuchka / Chotpoti (ফুচকা / চটপটি)", description: "Traditional street snack", price: "৳40" }
      ]
    },
    {
      title: "Special Meals",
      icon: Soup,
      color: "from-green-400 to-green-600",
      badgeColor: "bg-green-100 text-green-800",
      items: [
        { name: "Egg Khichuri (ডিম খিচুড়ি)", description: "Comfort rice with egg", price: "৳60" },
        { name: "Lunch Box 1 (Egg)", description: "A comforting bowl of Bhoona Khichuri with a boiled egg", price: "৳60" },
        { name: "Lunch Box 2 (Veg)", description: "Plain Rice, Daal, two Bhortas, and a Vegetable Bhaji", price: "৳60" },
        { name: "Mini Biryani (মিনি বিরিয়ানি)", description: "Aromatic rice with chicken", price: "৳80" }
      ]
    },
    {
      title: "Beverages",
      icon: Pizza,
      color: "from-blue-400 to-blue-600",
      badgeColor: "bg-blue-100 text-blue-800",
      items: [
        { name: "Lassi (লাচ্ছি)", description: "Sweet yogurt drink", price: "৳30" },
        { name: "Mineral Water", description: "500ml bottle", price: "MRP" },
        { name: "Soft Drinks", description: "250ml bottle", price: "MRP" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh, delicious, and affordable Bengali cuisine prepared daily with love
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${category.color} text-white p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className="h-8 w-8 drop-shadow-lg" />
                      <Badge className={`${category.badgeColor} border-0 shadow-sm`}>
                        {category.items.length} items
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 bg-gradient-to-b from-white to-gray-50/50">
                  <div className="space-y-5">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group/item">
                        <div className="flex justify-between items-start gap-3 mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover/item:text-green-600 transition-colors duration-300 text-sm leading-tight flex-1">
                            {item.name}
                          </h4>
                          <Badge 
                            variant="secondary" 
                            className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 font-bold border border-green-300 shadow-sm shrink-0"
                          >
                            {item.price}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed mb-3">{item.description}</p>
                        {itemIndex < category.items.length - 1 && (
                          <div className="border-b border-gray-200/60"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl border border-green-200/50">
            <Utensils className="h-6 w-6 text-green-600" />
            <span className="text-gray-700 font-semibold text-lg">All items freshly prepared daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
