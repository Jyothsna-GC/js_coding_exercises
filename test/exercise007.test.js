const { TestScheduler } = require("jest");
const { sumDigits, createRange,getScreentimeAlertList, } = require("../challenges/exercise007");
describe("sumDigits", () => {
    test("returns the sum of all digits", () => {
        expect(sumDigits(45)).toBe(9);
        expect(sumDigits(10)).toBe(1);
        expect(sumDigits(555)).toBe(15);
    });
});
describe ("createRange", () => {
    test("returns createRange", () => {
        expect(createRange(2,8,2)).toEqual([2,4,6,8]);
        expect(createRange(0,9,3)).toEqual([0,3,6,9]);
      });
});
describe ("getScreentimeAlertList", () => {
    test("returns getScreentimeAlertList", () => {
        const users=[
            {
             username: "beth_1234",
             name: "Beth Smith",
             screenTime: [
                         { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                       { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
            },
            {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
        },
       ];
    expect(getScreentimeAlertList(users,"2019-05-02")).toEqual(["beth_1234"]);
    
  });
});