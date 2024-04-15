import React from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../App.css";

const Categories = () => {
  const [listIndex, setListIndex] = useState(0);

  let Obj = {
    fashion: [
      {
        "Men's Top Ware": [
          "More in Men's Top Ware",
          "All",
          "Men's Formal Shirts",
          "Casual Shirt",
          "Men's T-Shirt",
          "Men's Kurtas",
          "Men's Ethnic Sets",
          "Men's Blazers",
          "Men's Raincoat",
          "Men's Windcheaters",
          "Men's Suit",
          "Men's Fabrics",
        ],
      },
      {
        "Men's Bottom Ware": [
          "More in Men's Bottom Ware",
          "All",
          "Jeans",
          "Trousers",
          "Shorts",
          "Track Pants",
          "Chinos",
          "Cargo Pants",
          "Joggers",
        ],
      },
      {
        "Women Ethnic": [
          "More in Women Ethnic",
          "All",
          "Sarees",
          "Kurtas & Kurtis",
          "Salwar Suits",
          "Lehenga Cholis",
          "Ethnic Dresses",
          "Palazzo Suits",
          "Anarkali Suits",
          "Dupattas & Shawls",
        ],
      },
      {
        "Men Footwear": [
          "More in Men Footwear",
          "All",
          "Formal Shoes",
          "Casual Shoes",
          "Sports Shoes",
          "Sneakers",
          "Sandals & Floaters",
          "Flip Flops",
          "Boots",
          "Loafers",
        ],
      },
      {
        "Watch and Accessories": [
          "More in Watch and Accessories",
          "All",
          "Watches",
          "Sunglasses",
          "Belts",
          "Wallets",
          "Caps & Hats",
          "Ties, Cufflinks & Pocket Squares",
          "Jewelry",
          "Bags & Backpacks",
        ],
      },
      {
        "Women Western": [
          "More in Women Western",
          "All",
          "Tops",
          "Dresses",
          "Jeans & Jeggings",
          "Skirts",
          "Shorts & Capris",
          "Leggings & Tights",
          "Jumpsuits & Rompers",
          "Shrugs & Jackets",
        ],
      },
      {
        "Bags, Suitcases & Luggage": [
          "More in Bags, Suitcases & Luggage",
          "All",
          "Backpacks",
          "Travel Duffels",
          "Trolley Bags",
          "Laptop Bags",
          "Handbags",
          "Messenger Bags",
          "School Bags",
          "Wallets & Clutches",
        ],
      },
      {
        Kids: [
          "More in Kids",
          "All",
          "Boys Clothing",
          "Girls Clothing",
          "Infants Wear",
          "Kids Footwear",
          "Toys & Games",
          "School Supplies",
          "Baby Care",
          "Kids Accessories",
        ],
      }
    ],
  };

  let Obj2={
    electronics: [
        {
          "Smartphones": [
            "More in Smartphones",
            "All",
            "Apple iPhone 13",
            "Samsung Galaxy S22",
            "Google Pixel 7",
            "OnePlus 10",
            "Xiaomi Mi 12",
            "Sony Xperia 2",
            "Huawei P50",
            "OPPO Find X5"
          ],
        },
        {
          "Laptops": [
            "More in Laptops",
            "All",
            "Apple MacBook Pro 2023",
            "Dell XPS 15",
            "HP Spectre x360",
            "Lenovo ThinkPad X1 Carbon",
            "Asus ROG Zephyrus G14",
            "Microsoft Surface Laptop 5",
            "Acer Swift 5",
            "Razer Blade 17"
          ],
        },
        {
          "Tablets": [
            "More in Tablets",
            "All",
            "Apple iPad Pro",
            "Samsung Galaxy Tab S8",
            "Microsoft Surface Pro 9",
            "Lenovo Tab P11",
            "Amazon Fire HD 10",
            "Huawei MatePad Pro",
            "Google Pixel Slate",
            "Asus ZenPad 3S 10"
          ],
        },
        {
          "Headphones": [
            "More in Headphones",
            "All",
            "Apple AirPods Pro",
            "Sony WH-1000XM4",
            "Bose Noise Cancelling Headphones 700",
            "Sennheiser Momentum 3 Wireless",
            "Jabra Elite 85t",
            "Beats Studio Buds",
            "Samsung Galaxy Buds Pro",
            "Anker Soundcore Liberty Air 2 Pro"
          ],
        },
        {
          "Smartwatches": [
            "More in Smartwatches",
            "All",
            "Apple Watch Series 7",
            "Samsung Galaxy Watch 5",
            "Fitbit Sense",
            "Garmin Fenix 7",
            "Huawei Watch GT 3",
            "Xiaomi Mi Watch",
            "Fossil Gen 6",
            "Amazfit GTR 3"
          ],
        },
        {
          "Cameras": [
            "More in Cameras",
            "All",
            "Sony Alpha 7 IV",
            "Canon EOS R5",
            "Nikon Z9",
            "Fujifilm X-T4",
            "Panasonic Lumix GH5 II",
            "Olympus OM-D E-M1 Mark III",
            "Leica Q2",
            "GoPro Hero 10 Black"
          ],
        },
        {
          "Televisions": [
            "More in Televisions",
            "All",
            "Samsung QN90A Neo QLED 4K TV",
            "LG C1 OLED TV",
            "Sony X90J 4K LED TV",
            "TCL 6-Series 4K QLED TV",
            "Vizio OLED55-H1 OLED TV",
            "Hisense U8G Quantum Series TV",
            "Panasonic HX800 4K LED TV",
            "Toshiba Fire TV Edition"
          ],
        },
        {
          "Gaming Consoles": [
            "More in Gaming Consoles",
            "All",
            "Sony PlayStation 5",
            "Microsoft Xbox Series X",
            "Nintendo Switch OLED",
            "Sony PlayStation 4 Pro",
            "Microsoft Xbox One X",
            "Nintendo Switch Lite",
            "Sony PlayStation VR",
            "Microsoft Xbox Series S"
          ],
        }
      ],
  }

  let Obj3={
    "homeAndFurniture": [
        {
          "Living Room Furniture": [
            "More in Living Room Furniture",
            "All",
            "Sofas",
            "Coffee Tables",
            "TV Stands & Entertainment Centers",
            "Accent Chairs",
            "End Tables",
            "Ottomans",
            "Bookcases & Shelving",
            "Futons & Sleeper Sofas"
          ],
        },
        {
          "Bedroom Furniture": [
            "More in Bedroom Furniture",
            "All",
            "Beds",
            "Mattresses",
            "Dressers & Chests",
            "Nightstands",
            "Bedroom Sets",
            "Vanities",
            "Bed Frames",
            "Armoires & Wardrobes"
          ],
        },
        {
          "Dining Room Furniture": [
            "More in Dining Room Furniture",
            "All",
            "Dining Tables",
            "Dining Chairs",
            "Bar Stools",
            "Buffets & Sideboards",
            "China Cabinets",
            "Kitchen Islands & Carts",
            "Dining Sets",
            "Display Cabinets"
          ],
        },
        {
          "Home Office Furniture": [
            "More in Home Office Furniture",
            "All",
            "Desks",
            "Office Chairs",
            "Bookcases",
            "File Cabinets",
            "Desk Hutches",
            "Office Sets",
            "Drafting Tables",
            "Conference Tables"
          ],
        },
        {
          "Outdoor Furniture": [
            "More in Outdoor Furniture",
            "All",
            "Outdoor Sofas",
            "Outdoor Dining Sets",
            "Outdoor Chairs",
            "Outdoor Tables",
            "Hammocks",
            "Patio Furniture Covers",
            "Outdoor Benches",
            "Outdoor Lounge Chairs"
          ],
        },
        {
          "Home Decor": [
            "More in Home Decor",
            "All",
            "Rugs",
            "Wall Decor",
            "Mirrors",
            "Clocks",
            "Decorative Pillows",
            "Candles & Holders",
            "Decorative Accents",
            "Artificial Plants & Flowers"
          ],
        },
        {
          "Lighting": [
            "More in Lighting",
            "All",
            "Chandeliers",
            "Pendant Lighting",
            "Ceiling Fans",
            "Table Lamps",
            "Floor Lamps",
            "Wall Sconces",
            "Outdoor Lighting",
            "Smart Lighting"
          ],
        },
        {
          "Storage & Organization": [
            "More in Storage & Organization",
            "All",
            "Storage Bins & Baskets",
            "Shelving Units",
            "Closet Organizers",
            "Storage Cabinets",
            "Storage Trunks",
            "Garage Storage",
            "Drawer Organizers",
            "Hangers & Hooks"
          ],
        }
      ],
  }

  let Obj4={
    "beautyToysMore": [
      {
        "Beauty Products": [
          "More in Beauty Products",
          "All",
          "Skincare",
          "Haircare",
          "Makeup",
          "Fragrances",
          "Bath & Body",
          "Personal Care",
          "Men's Grooming",
          "Beauty Tools & Accessories",
          "Beauty Sets & Kits"
        ]
      },
      {
        "Toys & Games": [
          "More in Toys & Games",
          "All",
          "Educational Toys",
          "Action Figures",
          "Dolls & Dollhouses",
          "Board Games",
          "Puzzles",
          "Outdoor Toys",
          "Building Toys",
          "Remote Control Toys",
          "Stuffed Animals & Plushies"
        ]
      },
      {
        "Books & Magazines": [
          "More in Books & Magazines",
          "All",
          "Fiction",
          "Non-Fiction",
          "Children's Books",
          "Comic Books",
          "Magazines",
          "Self-Help & Motivational",
          "Cookbooks",
          "Travel Books",
          "Biographies & Memoirs",
          "Art & Photography Books"
        ]
      },
      {
        "Stationery": [
          "More in Stationery",
          "All",
          "Pens & Pencils",
          "Notebooks & Journals",
          "Planners & Organizers",
          "Desk Accessories",
          "Calendars",
          "Stickers & Labels",
          "Writing Sets",
          "Art Supplies",
          "School Supplies",
          "Craft Supplies"
        ]
      },
      {
        "Pet Supplies": [
          "More in Pet Supplies",
          "All",
          "Dog Food & Treats",
          "Cat Food & Treats",
          "Pet Beds & Furniture",
          "Toys",
          "Grooming Supplies",
          "Collars & Leashes",
          "Pet Apparel",
          "Bowls & Feeders",
          "Litter & Housebreaking",
          "Aquarium Supplies"
        ]
      },
      {
        "Health & Wellness": [
          "More in Health & Wellness",
          "All",
          "Vitamins & Supplements",
          "First Aid",
          "Sports Nutrition",
          "Health Monitors",
          "Massage & Relaxation",
          "Fitness Accessories",
          "Oral Care",
          "Vision Care",
          "Mobility Aids & Equipment",
          "Sleep & Snoring Aids"
        ]
      },
      {
        "Outdoor & Camping": [
          "More in Outdoor & Camping",
          "All",
          "Tents & Shelters",
          "Sleeping Bags & Camp Bedding",
          "Camp Kitchen",
          "Camping Furniture",
          "Coolers & Cool Bags",
          "Outdoor Clothing",
          "Hiking Gear",
          "Camping Accessories",
          "Binoculars & Scopes",
          "Flashlights & Lanterns",
          "Emergency & Survival Gear"
        ]
      },
      {
        "Electronics Accessories": [
          "More in Electronics Accessories",
          "All",
          "Phone Cases & Covers",
          "Screen Protectors",
          "Chargers & Cables",
          "Power Banks",
          "Headphone & Earphone Accessories",
          "Smartwatch Accessories",
          "Camera Accessories",
          "Computer Accessories",
          "Gaming Accessories",
          "Cable Management",
          "Car Accessories"
        ]
      }
    ]
  }
  
 let Obj5={
    bikes:["Petrol Vehicles","Electric Vehicles"]
 }
  

  return (
    <div className="w-[1600px] bg-white flex justify-center gap-20 mt-4 mx-auto z-20">
      <div className="flex flex-col  gap-2 items-center cursor-pointer text-lg">
        <img src={"/Category/Grocery.webp"} alt="Grocery" />
        <p>Grocery</p>
      </div>

      <div className="flex flex-col gap-2 items-center cursor-pointer text-lg">
        <img src={"/Category/Mobiles.webp"} alt="Grocery" />
        <p>Mobiles</p>
      </div>

      <div className=" cursor-pointer text-lg ">
        <div className="flex flex-col gap-2 items-center relative fashion">
          <img src={"/Category/Fashion.png"} alt="Grocery" />
          <p className="flex items-center hover:text-blue-800 font-medium button">
            Fashion
            <span className="caret">
              <MdOutlineKeyboardArrowDown />
            </span>
          </p>

          <div className="absolute fashionDD1 rounded-lg">
            {Obj.fashion
              .flatMap((el, ind) => {
                return Object.keys(el);
              })
              .map((el, ind) => (
                <div
                  key={ind}
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                >
                  <p id={ind} onMouseOver={(e) => setListIndex(e.target.id)} onMouseLeave={() => setListIndex(0)}>
                    {el}
                  </p>
                </div>
              ))}
          </div>
          <div className="absolute fashionDD2 rounded-lg">
            {Obj.fashion
              .flatMap((el, ind) => {
                return Object.values(el);
              })
              [listIndex || 0].map((item, ind) => (
                <p
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                  key={ind}
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
    
      <div className=" cursor-pointer text-lg ">
        <div className="flex flex-col gap-2 items-center relative elctronics">
          <img src={"/Category/Electronics.png"} alt="Grocery" />
          <p className="flex items-center hover:text-blue-800 font-medium button">
          Electronics
            <span className="caret">
              <MdOutlineKeyboardArrowDown />
            </span>
          </p>

          <div className="absolute elctronicsDD1 rounded-lg">
            {Obj2.electronics
              .flatMap((el, ind) => {
                return Object.keys(el);
              })
              .map((el, ind) => (
                <div
                  key={ind}
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                >
                  <p id={ind} onMouseOver={(e) => setListIndex(e.target.id)} onMouseLeave={() => setListIndex(0)}>
                    {el}
                  </p>
                </div>
              ))}
          </div>
          <div className="absolute elctronicsDD2 rounded-lg">
            {Obj2.electronics
              .flatMap((el, ind) => {
                return Object.values(el);
              })
              [listIndex || 0].map((item, ind) => (
                <p
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                  key={ind}
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>


      <div className=" cursor-pointer text-lg ">
        <div className="flex flex-col gap-2 items-center relative home">
          <img src={"/Category/Furniture.jpg"} alt="Grocery" />
          <p className="flex items-center hover:text-blue-800  button">
          Home and Furniture
            <span className="caret">
              <MdOutlineKeyboardArrowDown />
            </span>
          </p>

          <div className="absolute homeDD1 rounded-lg">
            {Obj3.homeAndFurniture
              .flatMap((el, ind) => {
                return Object.keys(el);
              })
              .map((el, ind) => (
                <div
                  key={ind}
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                >
                  <p id={ind} onMouseOver={(e) => setListIndex(e.target.id)} onMouseLeave={()=>setListIndex(0)}>
                    {el}
                  </p>
                </div>
              ))}
          </div>
          <div className="absolute homeDD2 rounded-lg">
            {Obj3.homeAndFurniture
              .flatMap((el, ind) => {
                return Object.values(el);
              })
              [listIndex || 0].map((item, ind) => (
                <p
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                  key={ind+20}
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-2 items-center cursor-pointer text-lg">
        <img src={"/Category/Appliances.webp"} alt="Grocery" />
        <p>Appliances</p>
      </div>


      <div className="flex flex-col gap-2 items-center cursor-pointer text-lg">
        <img src={"/Category/Travel.webp"} alt="Grocery" />
        <p>Travel</p>
      </div>

      <div className=" cursor-pointer text-lg ">
        <div className="flex flex-col gap-2 items-center relative beauty">
          <img src={"/Category/Furniture.jpg"} alt="Grocery" />
          <p className="flex items-center hover:text-blue-800  button">
          Beauty Toys & More
            <span className="caret">
              <MdOutlineKeyboardArrowDown />
            </span>
          </p>

          <div className="absolute beautyDD1 rounded-lg">
            {Obj4.beautyToysMore
              .flatMap((el, ind) => {
                return Object.keys(el);
              })
              .map((el, ind) => (
                <div
                  key={ind}
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                >
                  <p id={ind} onMouseOver={(e) => setListIndex(e.target.id)} onMouseLeave={() => setListIndex(0)}>
                    {el}
                  </p>
                </div>
              ))}
          </div>
          <div className="absolute beautyDD2 rounded-lg">
            {Obj4.beautyToysMore
              .flatMap((el, ind) => {
                return Object.values(el);
              })
              [listIndex || 0].map((item, ind) => (
                <p
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                  key={ind+20}
                >
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>
    
      <div className=" cursor-pointer text-lg ">
        <div className="flex flex-col gap-2 items-center relative bike">
          <img src={"/Category/Bikes.png"} alt="Grocery" />
          <p className="flex items-center hover:text-blue-800  button">
          Two Wheelers
            <span className="caret">
              <MdOutlineKeyboardArrowDown />
            </span>
          </p>

          <div className="absolute bikeDD1 rounded-lg">
            {Obj5.bikes
              .map((el, ind) => (
                <div
                  key={ind}
                  className={`hover:bg-[#FAFAFA] text-gray-600 text-sm px-2 py-[10px] w-full hover:text-[16px] hover:font-semibold`}
                >
                  <p id={ind} onMouseOver={(e) => setListIndex(e.target.id)} onMouseLeave={() => setListIndex(0)}>
                    {el}
                  </p>
                </div>
              ))}
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Categories;
