
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MenuSection = () => {
  const menuCategories = [
    {
      title: "Daily Snacks & Tiffin",
      color: "bg-green-100 text-green-800",
      items: [
        { name: "Singara (সিঙাড়া)", description: "Classic potato-filled pastry. A student favourite.", price: "Tk 8" },
        { name: "Samucha (সামুচা)", description: "Crispy, savoury pastry with a vegetable or lentil filling.", price: "Tk 8" },
        { name: "Alur Chop (আলুর চপ)", description: "Spiced mashed potato ball, coated in besan and fried.", price: "Tk 12" },
        { name: "Puri Plate (পুরি প্লেট)", description: "2 pieces of Daal or Aloo Puri with a bit of chutney or bhaji.", price: "Tk 15" }
      ]
    },
    {
      title: "Street Food",
      color: "bg-orange-100 text-orange-800",
      items: [
        { name: "Fuchka / Chotpoti (ফুচকা / চটপটি)", description: "The ultimate street food snack, served fresh to order.", price: "Tk 35" },
        { name: "Spicy Fried Chicken (মশলা ফ্রাইড চিকেন)", description: "One piece of crispy, juicy chicken with a 'desi' spice blend.", price: "Tk 40" }
      ]
    },
    {
      title: "Full Meals",
      color: "bg-blue-100 text-blue-800",
      items: [
        { name: "Lunch Box 1 (Egg)", description: "Plain Rice, Daal, Alu Bhorta, and one Egg Bhuna.", price: "Tk 60" },
        { name: "Lunch Box 3 (Veg)", description: "Plain Rice, Daal, two Bhortas, and a Vegetable Bhaji.", price: "Tk 50" }
      ]
    },
    {
      title: "Weekly Specials",
      color: "bg-purple-100 text-purple-800",
      items: [
        { name: "(Mon) Egg Khichuri (ডিম খিচুড়ি)", description: "A comforting bowl of Bhoona Khichuri with a boiled egg.", price: "Tk 55" },
        { name: "(Wed) Mini Biryani (মিনি বিরিয়ানি)", description: "A special portion of Chicken Biryani with one piece of chicken.", price: "Tk 75" }
      ]
    },
    {
      title: "Healthy & Fresh",
      color: "bg-green-100 text-green-800",
      items: [
        { name: "Mixed Fruit (ফল চাট)", description: "A cup of mixed seasonal fruits with a sprinkle of tangy chaat masala.", price: "Tk 45" }
      ]
    },
    {
      title: "Drinks",
      color: "bg-cyan-100 text-cyan-800",
      items: [
        { name: "Lassi (লাচ্ছি)", description: "A glass of sweet yogurt lassi, a Bogura classic.", price: "Tk 25" },
        { name: "Mineral Water (পানি)", description: "500ml Bottle", price: "Tk 15" },
        { name: "Soft Drinks (কোল্ড ড্রিংক্স)", description: "250ml Bottle (Coke, Pepsi, etc.)", price: "Tk 25" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Complete Menu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From traditional Bengali snacks to hearty full meals, we offer fresh, 
            delicious food at affordable prices with quality guarantee.
          </p>
        </div>

        <div className="grid gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl">{category.title}</span>
                  <Badge className={category.color}>
                    {category.items.length} Items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-green-300 transition-colors duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
