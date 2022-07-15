const mongooseDBoops = require("./mongoDBoops");
const mocksamples = require("./mockSamples");
const sample = require("./models/sample");

// test("thisi si to test the new schema ", async () => {
//   const spysample = jest
//     .spyOn(sample, "find")
//     .mockImplementation(() => mocksamples.allSamples);

//   const s = await mongooseDBoops.returnAllSamples();

//   expect(spysample).toHaveBeenCalled();

//   expect(s).toEqual(mocksamples.allSamples);

//   spysample.mockRestore();
// });

test(" thisi si to test the new schema ", () => {
  var retrunObj = [
    {
      parentId: 2,
      childs: [
        {
          groupId: 2,
          groupName: "Status Table",
          catgId: 1,
          catgName: "VISIONXFS",
        },
        {
          groupId: 2,
          groupName: "Status Table",
          catgId: 2,
          catgName: "VISIONXFSv2",
        },
        {
          groupId: 2,
          groupName: "Status Table",
          catgId: 4,
          catgName: "NCR APTRA SOH",
        },
      ],
    },
    {
      parentId: 3,
      childs: [
        {
          groupId: 3,
          groupName: "Region",
          catgId: 1,
          catgName: "Default",
        },
        {
          groupId: 3,
          groupName: "Region",
          catgId: 3,
          catgName: "Noreste",
        },
      ],
    },
    {
      parentId: 4,
      childs: [
        {
          groupId: 4,
          groupName: "Institution",
          catgId: 1,
          catgName: "Default",
        },
        {
          groupId: 4,
          groupName: "Institution",
          catgId: 2,
          catgName: "Caja Popular Mexicana",
        },
        {
          groupId: 4,
          groupName: "Institution",
          catgId: 3,
          catgName: "Reconciliacion",
        },
      ],
    },
    {
      parentId: 5,
      childs: [
        {
          groupId: 5,
          groupName: "Data Line",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 6,
      childs: [
        {
          groupId: 6,
          groupName: "Object Type",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 7,
      childs: [
        {
          groupId: 7,
          groupName: "Branch",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 8,
      childs: [
        {
          groupId: 8,
          groupName: "Zone",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 9,
      childs: [
        {
          groupId: 9,
          groupName: "Area",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 10,
      childs: [
        {
          groupId: 10,
          groupName: "Sector",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 11,
      childs: [
        {
          groupId: 11,
          groupName: "District",
          catgId: 1,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 12,
      childs: [
        {
          groupId: 12,
          groupName: "Object Class",
          catgId: 1,
          catgName: "Managed Client",
        },
        {
          groupId: 12,
          groupName: "Object Class",
          catgId: 2,
          catgName: "Site",
        },
      ],
    },
    {
      parentId: 13,
      childs: [
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 3,
          catgName: "Centro",
        },
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 4,
          catgName: "Noreste",
        },
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 5,
          catgName: "Norte",
        },
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 6,
          catgName: "Occidente",
        },
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 7,
          catgName: "Sur",
        },
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 8,
          catgName: "Sureste",
        },
        {
          groupId: 13,
          groupName: "Regional",
          catgId: 36,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 14,
      childs: [
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 9,
          catgName: "Bajio Centro",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 10,
          catgName: "Celaya",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 11,
          catgName: "Coatzacoalcos",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 12,
          catgName: "Coecillo Leon",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 13,
          catgName: "Colima",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 14,
          catgName: "Cubilete",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 15,
          catgName: "Delicias Parral",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 16,
          catgName: "Fresnillo",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 17,
          catgName: "Guanajuato Norte",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 18,
          catgName: "Huajuapan de Leon",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 19,
          catgName: "Laguna Durango",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 20,
          catgName: "Miahuatlan",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 21,
          catgName: "Oaxaca",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 22,
          catgName: "Orizaba",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 23,
          catgName: "Poza Rica",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 24,
          catgName: "Puebla",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 25,
          catgName: "Queretaro",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 26,
          catgName: "San Francisco",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 27,
          catgName: "San Luis",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 28,
          catgName: "Tala Guadalajara",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 29,
          catgName: "Tampico",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 30,
          catgName: "Tehuixtla Morelos",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 31,
          catgName: "Tepic Ignacio Diaz y Macedo",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 32,
          catgName: "Valle de Santiago",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 33,
          catgName: "Yucatan",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 34,
          catgName: "Zamora",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 35,
          catgName: "Aguascalientes",
        },
        {
          groupId: 14,
          groupName: "Plaza",
          catgId: 37,
          catgName: "Default",
        },
      ],
    },
    {
      parentId: 15,
      childs: [
        {
          groupId: 15,
          groupName: "Impresora",
          catgId: 38,
          catgName: "Epson",
        },
        {
          groupId: 15,
          groupName: "Impresora",
          catgId: 39,
          catgName: "Toshiba",
        },
      ],
    },
    {
      parentId: 16,
      childs: [
        {
          groupId: 16,
          groupName: "Procesador",
          catgId: 40,
          catgName: "Canyon",
        },
        {
          groupId: 16,
          groupName: "Procesador",
          catgId: 41,
          catgName: "Voyager",
        },
        {
          groupId: 16,
          groupName: "Procesador",
          catgId: 42,
          catgName: "Voyager 2_0",
        },
      ],
    },
    {
      parentId: 17,
      childs: [
        {
          groupId: 17,
          groupName: "Carga ATM",
          catgId: 43,
          catgName: "Posterior RL",
        },
        {
          groupId: 17,
          groupName: "Carga ATM",
          catgId: 44,
          catgName: "Frontal FL",
        },
      ],
    },
    {
      parentId: 18,
      childs: [
        {
          groupId: 18,
          groupName: "ATM Type",
          catgId: 45,
          catgName: "Deposit",
        },
      ],
    },
    {
      parentId: 19,
      childs: [
        {
          groupId: 19,
          groupName: "Maker Checkers",
          catgId: 46,
          catgName: "ATM Grupo 1",
        },
        {
          groupId: 19,
          groupName: "Maker Checkers",
          catgId: 47,
          catgName: "ATM Grupo 2",
        },
        {
          groupId: 19,
          groupName: "Maker Checkers",
          catgId: 48,
          catgName: "ATM Grupo 3",
        },
      ],
    },
    {
      parentId: 20,
      childs: [
        {
          groupId: 20,
          groupName: "Inv Makers Checkers",
          catgId: 49,
          catgName: "Deposito",
        },
      ],
    },
  ];

  retrunObj.forEach(function (value) {
    var category = {
      categoryId: value.childs[0].groupId,
      categoryName: value.childs[0].groupName,
    };
    console.log("categorey => " + category);
  });
  console.log(retrunObj);
});
