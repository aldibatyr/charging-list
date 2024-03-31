import { LocationModel } from "./Location"

test("can be created", () => {
  const instance = LocationModel.create({
    id: 1,
    name: "test",
    address: "test",
    latitude: 0,
    longitude: 0,
    inserted_at: "test",
    company: "test",
  })

  expect(instance).toBeTruthy()
})
