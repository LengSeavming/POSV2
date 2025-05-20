import Pet from "@models/pet/pet.model";
import PetType from "@models/pet/pet.type.model";

export class PetSeeder {
  public static async seed() {
    try {
      await PetSeeder.seedPetTypes();
      await PetSeeder.seedPet();
    } catch (error) {
      console.error("\x1b[31m\nError seeding pets:", error);
    }
  }

  private static async seedPetTypes() {
    try {
      await PetType.bulkCreate(petSeederData.kinds);
      console.log("\x1b[32mPet types inserted successfully.");
    } catch (error) {
      console.error("Error seeding pet types:", error);
      throw error;
    }
  }

  private static async seedPet() {
    try {
      await Pet.bulkCreate(petSeederData.pets);
      console.log("\x1b[32mPets inserted successfully.");
    } catch (error) {
      console.error("Error seeding pet:", error);
      throw error;
    }
  }
}

// Mock data for products and product types
const petSeederData = {
  kinds: [
    { name: "WOMEN", image: "static/pos/perfume/type/beautiful_woman.png" },
    { name: "MEN", image: "static/pos/perfume/type/suit_man.jpg" },

  ],
  pets: [
    {
      code: "P001",
      type_id: 1,
      name: "CASHMERE ROSE EDP 100ML",
      unit_price: 38,
      image: "static/pos/perfume/women/CASHMERE_ROSE_EDP_100_ML_729,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P002",
      type_id: 1,
      name: "FABULOUS SWEET EDP 100ML",
      unit_price: 38,
      image: "static/pos/perfume/women/FABULOUS_SWEET_EDP_100_ML_729,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P003",
      type_id: 1,
      name: "FIELDS AT NIGHTFALL BLUSH EDP 100ML",
      unit_price: 38,
      image: "static/pos/perfume/women/FIELDS_AT NIGHTFALL BLUSH_EDP_100_ML_729,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P004",
      type_id: 1,
      name: "FIELDS AT NIGHTFALL INTENSE PARFUM 100ML",
      unit_price: 40,
      image: "static/pos/perfume/women/FIELDS_AT_NIGHTFALL_INTENSE_PARFUM_100 ML_799,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P005",
      type_id: 2,
      name: "NUDE BOUQUET JOYFULL EDP 100ML",
      unit_price: 60,
      image: "static/pos/perfume/women/NUDE_BOUQUET_JOYFULL_EDP_100ML_$_49.95.webp",
      creator_id: 1,
    },
    {
      code: "P006",
      type_id: 1,
      name: "NUDE BOUQUET BLUSH EDP 100ML",
      unit_price: 38,
      image: "static/pos/perfume/women/NUDE_BOUQUET_BLUSH_EDP_100_ML_729,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P007",
      type_id: 1,
      name: "RED ZARA TEMPTATION EDP 80ML",
      unit_price: 40,
      image: "static/pos/perfume/women/RED_ZARA TEMPTATION_EDP_80ML_799,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P008",
      type_id: 1,
      name: "IVORY MOON EDP 100 ML",
      unit_price: 38,
      image: "static/pos/perfume/women/IVORY_MOON_EDP_100_ML_729,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P009",
      type_id: 1,
      name: "NUDE BOUQUET EDP 100ML",
      unit_price: 38,
      image: "static/pos/perfume/women/NUDE_BOUQUET_EDP_100ML_729,000_VND.jpg",
      creator_id: 1,
    },
    {
      code: "P010",
      type_id: 1,
      name: "NUDE BOUQUET INTENSE PARFUM 100ML",
      unit_price: 40,
      image: "static/pos/perfume/women/NUDE_BOUQUET_INTENSE_PARFUM_100_ML_799,000_VND.jpg",
      creator_id: 1,
    },
    
  ],
};
