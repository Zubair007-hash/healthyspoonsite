
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

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0">
                <CardHeader className={`bg-gradient-to-r ${category.color} text-white relative`}>
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-8 w-8" />
                    <Badge className={`${category.badgeColor} border-0`}>
                      {category.items.length} items
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors text-sm leading-tight">
                            {item.name}
                          </h4>
                          <Badge variant="secondary" className="bg-green-100 text-green-800 font-bold ml-2 shrink-0">
                            {item.price}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                        {itemIndex < category.items.length - 1 && (
                          <div className="border-b border-gray-100 mt-3"></div>
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
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-green-200">
            <Utensils className="h-5 w-5 text-green-600" />
            <span className="text-gray-700 font-medium">All items freshly prepared daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
