// 1. შევქმნათ new Map ზღვის ლომების ტიპი
const zgvisLomebi = new Map();

// დავამატოთ ზღვის ლომები Map-ში
zgvisLomebi.set("zl1", {
  saxeli: "ლეო",
  gvari: "მერაბიშვილი",
  sacxovrebeli: "გალაპაგოსი",
  asaki: 5
});

zgvisLomebi.set("zl2", {
  saxeli: "მარო",
  gvari: "გოგოჭური",
  sacxovrebeli: "ალასკა",
  asaki: 3
});

zgvisLomebi.set("zl3", {
  saxeli: "ბრუკი",
  gvari: "სამადაშვილი",
  sacxovrebeli: "კალიფორნია",
  asaki: 7
});

// 3. for...of ციკლით გადავუაროთ keys() და გამოვიტანოთ მათი value-ები
for (const key of zgvisLomebi.keys()) {
  const value = zgvisLomebi.get(key);
  console.log(value);
}