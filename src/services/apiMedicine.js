import supabase from "../../supabase";

export async function addMedicine(newMedicine) {
  const { data, error } = await supabase.from("medicine").insert([newMedicine]);
  if (error) {
    throw new Error("Medicine not added.");
  }
  return data;
}
export async function addFungiMedicine(newMedicine) {
  const { data, error } = await supabase
    .from("FungiMedicine")
    .insert([newMedicine]);
  if (error) {
    throw new Error("Medicine not added.");
  }
  return data;
}
export async function searchfungiMedicine(query) {
  const { data, error } = await supabase
    .from("FungiMedicine")
    .select("*")
    .ilike("name", `%${query}%`);
  if (error) {
    throw new Error("Medicine not found.");
  }
  return { data, error };
}
export async function searchMedicine(query) {
  const { data, error } = await supabase
    .from("medicine")
    .select("*")
    .ilike("name", `%${query}%`);
  if (error) {
    throw new Error("Medicine not found.");
  }

  return { data, error };
}
export async function updateMedicine(id, medName, dose) {
  const { data, error } = await supabase
    .from("medicine")
    .update({ name: medName, dose: dose })
    .eq("id", id)
    .select();
  if (error) {
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
    throw new Error("Something went Wrong.");
  }
  console.log(medName, dose, id);
  return data;
}
export async function showFungiMedicine() {
  const { data, error } = await supabase
    .from("FungiMedicine")
    .select("*")
    .order("id", { ascending: true });
  console.log(data, error);
  return { data, error };
}
export async function showMedicine() {
  const { data, error } = await supabase
    .from("medicine")
    .select("*")
    .order("id", { ascending: true });
  console.log(data, error);
  return { data, error };
}
