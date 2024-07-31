import supabase from "../../supabase";

export async function addMedicine(newMedicine) {
  const { data, error } = await supabase.from("medicine").insert([newMedicine]);
  if (error) {
    console.error(error.message);
    throw new Error("Medicine not added.");
  }
  return data;
}
export async function addFungiMedicine(newMedicine) {
  const { data, error } = await supabase
    .from("FungiMedicine")
    .insert([newMedicine]);
  if (error) {
    console.error(error.message);
    throw new Error("Medicine not added.");
  }
  return data;
}
export async function searchMedicine(query) {
  const { data, error } = await supabase
    .from("medicine")
    .select("*")
    .ilike("name", `%${query}%`);
  if (error) {
    console.error(error.message);
    throw new Error("Medicine not found.");
  }

  return data;
}
export async function updateMedicine(id, medName, dose) {
  const { data, error } = await supabase
    .from("medicine")
    .update({ name: medName, dose: dose })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error.message);
    throw new Error("Something went Wrong.");
  }
  console.log(medName, dose, id);
  return data;
}
export async function updateFungiMedicine(id, medName, dose) {
  const { data, error } = await supabase
    .from("FungiMedicine")
    .update({ name: medName, dose: dose })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error.message);
    throw new Error("Something went Wrong.");
  }
  return data;
}
export async function showFungiMedicine() {
  const { data, error } = await supabase
    .from("FungiMedicine")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error.message);
    throw new Error("Medicine not found.");
  }
  return data;
}
export async function showMedicine() {
  const { data, error } = await supabase
    .from("medicine")
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    console.error(error.message);
    throw new Error("Medicine not found.");
  }
  return data;
}
