export interface Station {
  id:number,
  address:string,
  postcode:string,
  altitude:string,
  capacity:string,
  type:string,
  x:number,
  y:number
}

export const stations = [
	{
		"id": 1,
		"address": "GRAN VIA CORTS CATALANES, 760",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "46",
		"x": 2.1801069,
		"y": 41.3979779
	},
	{
		"id": 2,
		"address": "C/ ROGER DE FLOR, 126",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "29",
		"x": 2.1771985,
		"y": 41.3954877
	},
	{
		"id": 3,
		"address": "C/ NÀPOLS, 82",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "27",
		"x": 2.1813305,
		"y": 41.3941557
	},
	{
		"id": 4,
		"address": "C/ RIBES, 13",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "21",
		"x": 2.1812483,
		"y": 41.3933173
	},
	{
		"id": 5,
		"address": "PG. LLUIS COMPANYS, 11 (ARC TRIOMF)",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "39",
		"x": 2.1801763,
		"y": 41.3911035
	},
	{
		"id": 6,
		"address": "PG. LLUIS COMPANYS, 18  (ARC TRIOMF)",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "39",
		"x": 2.1805685,
		"y": 41.3914292
	},
	{
		"id": 7,
		"address": "PG. PUJADES,  1 (JUTJATS)",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "27",
		"x": 2.18329,
		"y": 41.388885
	},
	{
		"id": 8,
		"address": "PG. PUJADES, 2",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "26",
		"x": 2.183489,
		"y": 41.389135
	},
	{
		"id": 9,
		"address": "AV. MARQUÉS DE L'ARGENTERA,13",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.184922,
		"y": 41.384546
	},
	{
		"id": 10,
		"address": "C/ 60, NÚMERO 25",
		"postcode": "08040",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "42",
		"x": 2.1436235,
		"y": 41.3467746
	},
	{
		"id": 11,
		"address": "PG. MARITIM, 11 (DAVANT PL. BRUGADA)",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "35",
		"x": 2.1933482,
		"y": 41.3812425
	},
	{
		"id": 12,
		"address": "PG. MARITIM, 23 (HOSPITAL DEL MAR)",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "26",
		"x": 2.1946255,
		"y": 41.3833653
	},
	{
		"id": 13,
		"address": "C/ MARINA, 25-33",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "54",
		"x": 2.195551,
		"y": 41.388143
	},
	{
		"id": 14,
		"address": "AV. MARQUÉS DE  L'ARGENTERA, 15",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.185085,
		"y": 41.384844
	},
	{
		"id": 15,
		"address": "C/ DIPUTACIÓ, 272",
		"postcode": "08009",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "27",
		"x": 2.16890319787512,
		"y": 41.3916117009235
	},
	{
		"id": 17,
		"address": "AV. MERIDIANA, 47 (D)",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "14.0",
		"capacity": "42",
		"x": 2.1866517,
		"y": 41.3982615
	},
	{
		"id": 18,
		"address": "C/ ROSSELLÓ, 453",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "27",
		"x": 2.1740472,
		"y": 41.4060589
	},
	{
		"id": 19,
		"address": "C/ ROSSELLÓ, 354",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "40.0",
		"capacity": "30",
		"x": 2.1707947,
		"y": 41.4031491
	},
	{
		"id": 20,
		"address": "C/ CARTAGENA, 308",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "18",
		"x": 2.1757334,
		"y": 41.410314
	},
	{
		"id": 21,
		"address": "C/ SANT ANTONI MARIA CLARET, 214",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "52.0",
		"capacity": "21",
		"x": 2.1740575,
		"y": 41.4108439
	},
	{
		"id": 22,
		"address": "C/ SARDENYA, 292",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "19",
		"x": 2.175767,
		"y": 41.4016969
	},
	{
		"id": 23,
		"address": "C/ BRUC, 45",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "27",
		"x": 2.1717397,
		"y": 41.3924661
	},
	{
		"id": 24,
		"address": "C/ MARINA, 199",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "40",
		"x": 2.1788855,
		"y": 41.4005784
	},
	{
		"id": 25,
		"address": "C/ BRUC, 102",
		"postcode": "08009",
		"type": "ELECTRICBIKESTATION",
		"altitude": "29.0",
		"capacity": "21",
		"x": 2.1681961,
		"y": 41.3954041
	},
	{
		"id": 26,
		"address": "C/ DOS DE MAIG, 230-232",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "18",
		"x": 2.1820722,
		"y": 41.4071692
	},
	{
		"id": 27,
		"address": "C/ PROVENÇA, 322",
		"postcode": "08037",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "21",
		"x": 2.1646338,
		"y": 41.3967524
	},
	{
		"id": 28,
		"address": "C/ SARDENYA, 362",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "23",
		"x": 2.1706498,
		"y": 41.4055143
	},
	{
		"id": 29,
		"address": "C/ PROVENÇA, 388-390",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "34.0",
		"capacity": "23",
		"x": 2.169941,
		"y": 41.401061
	},
	{
		"id": 30,
		"address": "C/ CASTILLEJOS, 184",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "13.0",
		"capacity": "29",
		"x": 2.1829894,
		"y": 41.4021805
	},
	{
		"id": 31,
		"address": "PL. DEL MAR",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "18",
		"x": 2.1889045,
		"y": 41.3748001
	},
	{
		"id": 32,
		"address": "LA BARCELONETA (CN BARCELONETA)",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "15",
		"x": 2.188928,
		"y": 41.3736911
	},
	{
		"id": 33,
		"address": "C/ PONTEVEDRA, 58B | C/ JUDICI",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "21",
		"x": 2.19067,
		"y": 41.37686
	},
	{
		"id": 34,
		"address": "C/ SANT PERE MÉS ALT, 4",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "21",
		"x": 2.1753364,
		"y": 41.3871079
	},
	{
		"id": 35,
		"address": "C/ SANT RAMON DE PENYAFORT, 1",
		"postcode": "08930",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "54",
		"x": 2.2206913,
		"y": 41.4134833
	},
	{
		"id": 36,
		"address": "AV. DE LA CATEDRAL, 6",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "21",
		"x": 2.1766834,
		"y": 41.3850616
	},
	{
		"id": 37,
		"address": "PG. DE COLOM - VIA LAIETANA",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "24",
		"x": 2.1820675,
		"y": 41.380624
	},
	{
		"id": 39,
		"address": "PL. PAU VILA (D)",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "44",
		"x": 2.186576,
		"y": 41.381046
	},
	{
		"id": 40,
		"address": "C/ DOCTOR AIGUADER, 2",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "18",
		"x": 2.187093,
		"y": 41.382335
	},
	{
		"id": 41,
		"address": "PL. POETA BOSCÀ | C/ ATLÀNTIDA",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "25",
		"x": 2.189906,
		"y": 41.379326
	},
	{
		"id": 42,
		"address": "C/ CIUTAT DE GRANADA, 168 | AV. DIAGONAL",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "24",
		"x": 2.189881,
		"y": 41.404511
	},
	{
		"id": 43,
		"address": "C/ CLOT, 1",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "13.0",
		"capacity": "27",
		"x": 2.1874404,
		"y": 41.4063864
	},
	{
		"id": 44,
		"address": "AV. MERIDIANA, 66",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "17",
		"x": 2.187081,
		"y": 41.40197
	},
	{
		"id": 45,
		"address": "C/ SARDENYA, 66",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.189371,
		"y": 41.391466
	},
	{
		"id": 46,
		"address": "C/ VILLENA, 1",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "54",
		"x": 2.19219450845947,
		"y": 41.3886065969256
	},
	{
		"id": 47,
		"address": "C/ RAMON TRIAS FARGAS, 21",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "47",
		"x": 2.1904003,
		"y": 41.3902194
	},
	{
		"id": 48,
		"address": "AV. MERIDIANA, 40",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "21",
		"x": 2.1871959,
		"y": 41.3960652
	},
	{
		"id": 49,
		"address": "C/ ROSA SENSAT, 20",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "21",
		"x": 2.1965766,
		"y": 41.3910756
	},
	{
		"id": 50,
		"address": "AV. PARAL.LEL, 54",
		"postcode": "08004",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "18",
		"x": 2.1709386,
		"y": 41.3751145
	},
	{
		"id": 52,
		"address": "PL. SANT MIQUEL, 4",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "32",
		"x": 2.177292,
		"y": 41.381708
	},
	{
		"id": 53,
		"address": "PL. CARLES PI I SUNYER",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "21",
		"x": 2.174016,
		"y": 41.385086
	},
	{
		"id": 54,
		"address": "C/ SANT OLEGUER, 2",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "18",
		"x": 2.1707321,
		"y": 41.3775319
	},
	{
		"id": 55,
		"address": "LA RAMBLA, 80",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "19",
		"x": 2.1735007,
		"y": 41.3811923
	},
	{
		"id": 56,
		"address": "PORTAL DE SANTA MADRONA, 2-4",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.1758261,
		"y": 41.3770715
	},
	{
		"id": 58,
		"address": "PLAÇA DELS ÀNGELS (MACBA)",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "43",
		"x": 2.16712,
		"y": 41.38268
	},
	{
		"id": 60,
		"address": "RBLA. CATALUNYA, 47",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "27.0",
		"capacity": "27",
		"x": 2.164035,
		"y": 41.3902625
	},
	{
		"id": 61,
		"address": "C/ ARAGÓ, 288",
		"postcode": "08009",
		"type": "ELECTRICBIKESTATION",
		"altitude": "26.0",
		"capacity": "20",
		"x": 2.166797,
		"y": 41.39352
	},
	{
		"id": 62,
		"address": "PL. CATALUNYA, 5",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "19.0",
		"capacity": "25",
		"x": 2.168819,
		"y": 41.387235
	},
	{
		"id": 63,
		"address": "PL. CATALUNYA, 7",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "19.0",
		"capacity": "26",
		"x": 2.169427,
		"y": 41.386543
	},
	{
		"id": 64,
		"address": "PL. CATALUNYA, 10-11 (LA RAMBLA)",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "21",
		"x": 2.1690686,
		"y": 41.387493
	},
	{
		"id": 65,
		"address": "PL. CATALUNYA, 10-11 (PG. DE GRÀCIA)",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "20.0",
		"capacity": "21",
		"x": 2.1696543,
		"y": 41.387696
	},
	{
		"id": 66,
		"address": "GRAN VIA DE LES CORTS CATALANES, 609",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "16",
		"x": 2.1678388,
		"y": 41.3893222
	},
	{
		"id": 67,
		"address": "C/ ROCAFORT, 214 | C/ ROSSELLÓ",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "37.0",
		"capacity": "24",
		"x": 2.1454802,
		"y": 41.3852864
	},
	{
		"id": 68,
		"address": "RAMBLA CATALUNYA, 133 /  CÒRSEGA",
		"postcode": "08008",
		"type": "ELECTRICBIKESTATION",
		"altitude": "44.0",
		"capacity": "27",
		"x": 2.1572953,
		"y": 41.3953894
	},
	{
		"id": 69,
		"address": "CARRER DE LA MARINA,25-33",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "42",
		"x": 2.195073,
		"y": 41.388507
	},
	{
		"id": 70,
		"address": "C/ COMTE URGELL, 23",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "27",
		"x": 2.1606506,
		"y": 41.380393
	},
	{
		"id": 71,
		"address": "C/ FLORIDABLANCA, 145",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "21",
		"x": 2.1629146,
		"y": 41.3819459
	},
	{
		"id": 72,
		"address": "C/ PROVENÇA, 215",
		"postcode": "08008",
		"type": "ELECTRICBIKESTATION",
		"altitude": "37.0",
		"capacity": "27",
		"x": 2.1586273,
		"y": 41.3927771
	},
	{
		"id": 73,
		"address": "C/ ENRIC GRANADOS, 93",
		"postcode": "08008",
		"type": "ELECTRICBIKESTATION",
		"altitude": "39.0",
		"capacity": "26",
		"x": 2.1563542,
		"y": 41.392135
	},
	{
		"id": 74,
		"address": "AV. JOSEP TARRADELLAS, 133",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "47.0",
		"capacity": "15",
		"x": 2.1432105,
		"y": 41.3900085
	},
	{
		"id": 75,
		"address": "AV. JOSEP TARRADELLAS, 58",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "40.0",
		"capacity": "21",
		"x": 2.1429115,
		"y": 41.385004
	},
	{
		"id": 76,
		"address": "C/ CÒRSEGA, 216",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "40.0",
		"capacity": "32",
		"x": 2.1532163,
		"y": 41.3917666
	},
	{
		"id": 77,
		"address": "AV. FRANCESC CAMBÓ, 10",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "24",
		"x": 2.1773214,
		"y": 41.3855644
	},
	{
		"id": 78,
		"address": "PL. UNIVERSITAT /  ARIBAU",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "27",
		"x": 2.1634306,
		"y": 41.3856474
	},
	{
		"id": 79,
		"address": "PL. UNIVERSITAT",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "24",
		"x": 2.1634768,
		"y": 41.385503
	},
	{
		"id": 80,
		"address": "C/ ENRIC  GRANADOS, 35",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "31.0",
		"capacity": "21",
		"x": 2.1599078,
		"y": 41.389668
	},
	{
		"id": 81,
		"address": "C/ VILAMARÍ,  61",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "21",
		"x": 2.1490553,
		"y": 41.3790718
	},
	{
		"id": 82,
		"address": "C/ CALÀBRIA, 112",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "20.0",
		"capacity": "40",
		"x": 2.1544371248114,
		"y": 41.3803180599865
	},
	{
		"id": 83,
		"address": "C/ CALABRIA, 158",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "22",
		"x": 2.1520645,
		"y": 41.3821658
	},
	{
		"id": 84,
		"address": "C/ DEL COMTE D'URGELL, 75 B",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "20.0",
		"capacity": "26",
		"x": 2.1571646,
		"y": 41.3830299
	},
	{
		"id": 85,
		"address": "AV. PARAL·LEL, 146 BIS",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "40",
		"x": 2.1592394,
		"y": 41.3751852
	},
	{
		"id": 86,
		"address": "C/ VILADOMAT,  2",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "12.0",
		"capacity": "27",
		"x": 2.1629349,
		"y": 41.3755747
	},
	{
		"id": 87,
		"address": "C/ ROCAFORT, 187",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "29.0",
		"capacity": "25",
		"x": 2.14799319162966,
		"y": 41.3832223888737
	},
	{
		"id": 88,
		"address": "C/ LONDRES, 101-103",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "45.0",
		"capacity": "20",
		"x": 2.1507739,
		"y": 41.3936144
	},
	{
		"id": 89,
		"address": "C/ ROSSELLÓ,  101",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "36.0",
		"capacity": "27",
		"x": 2.150342,
		"y": 41.3879131
	},
	{
		"id": 90,
		"address": "C/ ROSSELLÓ, 108-110",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "36.0",
		"capacity": "18",
		"x": 2.150878,
		"y": 41.388296
	},
	{
		"id": 91,
		"address": "C/ COMTE D'URGELL, 43",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "35",
		"x": 2.1594741,
		"y": 41.3812504
	},
	{
		"id": 92,
		"address": "C / PROVENÇA, 241",
		"postcode": "08008",
		"type": "ELECTRICBIKESTATION",
		"altitude": "37.0",
		"capacity": "17",
		"x": 2.1601641,
		"y": 41.3938861
	},
	{
		"id": 94,
		"address": "GRAN  VIA DE LES CORTS CATALANES, 375-385",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "26.0",
		"capacity": "48",
		"x": 2.1499102,
		"y": 41.3757914
	},
	{
		"id": 95,
		"address": "C/ TARRAGONA, 103-115",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "33",
		"x": 2.1473272,
		"y": 41.3763948
	},
	{
		"id": 96,
		"address": "GRAN VIA DE LES CORTS CATALANES, 368",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "21",
		"x": 2.1481993,
		"y": 41.3741093
	},
	{
		"id": 97,
		"address": "C/ TARRAGONA, 141",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "29.0",
		"capacity": "21",
		"x": 2.1450491,
		"y": 41.3779613
	},
	{
		"id": 98,
		"address": "C/ VIRIAT, 43",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "31.0",
		"capacity": "21",
		"x": 2.1408633,
		"y": 41.3806074
	},
	{
		"id": 99,
		"address": "C/ VIRIAT,  53",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "30.0",
		"capacity": "21",
		"x": 2.141539,
		"y": 41.3808222
	},
	{
		"id": 100,
		"address": "C/ TARRAGONA,  159-173",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "29.0",
		"capacity": "22",
		"x": 2.1443579,
		"y": 41.3787064
	},
	{
		"id": 101,
		"address": "AV. DIAGONAL, 602",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "53.0",
		"capacity": "24",
		"x": 2.143411,
		"y": 41.392878
	},
	{
		"id": 102,
		"address": "AV. DIAGONAL,  612",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "54.0",
		"capacity": "24",
		"x": 2.1422174,
		"y": 41.392567
	},
	{
		"id": 103,
		"address": "C/ ARAGÓ, 629",
		"postcode": "08026",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "21",
		"x": 2.1884487,
		"y": 41.410098
	},
	{
		"id": 104,
		"address": "C/ VALÈNCIA, 621",
		"postcode": "08026",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "26",
		"x": 2.1872438,
		"y": 41.4108005
	},
	{
		"id": 105,
		"address": "RDA. DE SANT PERE, 26",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "21",
		"x": 2.17425,
		"y": 41.389492
	},
	{
		"id": 106,
		"address": "PL  JOANIC - C / BRUNIQUER, 59",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "56.0",
		"capacity": "19",
		"x": 2.1622548,
		"y": 41.4055198
	},
	{
		"id": 107,
		"address": "TRAV. DE GRÀCIA, 92 / VIA AUGUSTA",
		"postcode": "08006",
		"type": "ELECTRICBIKESTATION",
		"altitude": "56.0",
		"capacity": "20",
		"x": 2.1531031,
		"y": 41.3982304
	},
	{
		"id": 108,
		"address": "C / INDÚSTRIA, 10",
		"postcode": "08037",
		"type": "ELECTRICBIKESTATION",
		"altitude": "45.0",
		"capacity": "21",
		"x": 2.1649035,
		"y": 41.4022081
	},
	{
		"id": 109,
		"address": "C/ LONDRES,  53",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "43.0",
		"capacity": "24",
		"x": 2.1476308,
		"y": 41.3912605
	},
	{
		"id": 110,
		"address": "AV. ROMA,  136",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "21",
		"x": 2.155089,
		"y": 41.3852585
	},
	{
		"id": 111,
		"address": "C/ ARAGÓN 147",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "19",
		"x": 2.1546746,
		"y": 41.3847528
	},
	{
		"id": 112,
		"address": "C/ FLORIDABLANCA, 49",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "13.0",
		"capacity": "20",
		"x": 2.157233,
		"y": 41.3776721
	},
	{
		"id": 113,
		"address": "RONDA DE SANT PAU, 51",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "33",
		"x": 2.1646742,
		"y": 41.3773113
	},
	{
		"id": 114,
		"address": "PL. JEAN GENET,  1",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "20",
		"x": 2.1740082,
		"y": 41.376735
	},
	{
		"id": 115,
		"address": "AV. MARQUÉS DE L'ARGENTERA,  3",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "21",
		"x": 2.184171,
		"y": 41.383597
	},
	{
		"id": 116,
		"address": "C/ DEL DR. AIGUADER, 72 / PG. SALVAT PAPASSEIT",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.1914756,
		"y": 41.3838369
	},
	{
		"id": 117,
		"address": "C/ ROSA SENSAT, 12",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "21",
		"x": 2.1972309,
		"y": 41.3906051
	},
	{
		"id": 118,
		"address": "C/ PUJADES,  3",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "27",
		"x": 2.1874966,
		"y": 41.39212
	},
	{
		"id": 119,
		"address": "C/ SARDENYA,  178",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "12.0",
		"capacity": "39",
		"x": 2.1825085,
		"y": 41.3967169
	},
	{
		"id": 120,
		"address": "C/ LEPANT,  278",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "21",
		"x": 2.1765126,
		"y": 41.4047056
	},
	{
		"id": 121,
		"address": "C/ CASTILLEJOS, 258",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "21",
		"x": 2.1785364,
		"y": 41.4064529
	},
	{
		"id": 122,
		"address": "C/ NÀPOLS, 344",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "54.0",
		"capacity": "32",
		"x": 2.1663172,
		"y": 41.4054458
	},
	{
		"id": 123,
		"address": "C/ PROVENÇA, 317",
		"postcode": "08037",
		"type": "ELECTRICBIKESTATION",
		"altitude": "34.0",
		"capacity": "21",
		"x": 2.16673522491668,
		"y": 41.398818448536307
	},
	{
		"id": 124,
		"address": "C/ NOVA  BOCANA",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "31",
		"x": 2.1878126,
		"y": 41.3702483
	},
	{
		"id": 125,
		"address": "PG. MARíTIM, 31 B (ANNEXA A LA  12)",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "21",
		"x": 2.194735,
		"y": 41.3834753
	},
	{
		"id": 126,
		"address": "PG. DE COLOM /VIA LAIETANA",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "23",
		"x": 2.1822815,
		"y": 41.380628
	},
	{
		"id": 127,
		"address": "C/ ARAGÓ, 659 /NAVAS DE TOLOSA",
		"postcode": "08026",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "27",
		"x": 2.1907524,
		"y": 41.4120681
	},
	{
		"id": 128,
		"address": "RAMBLA DE GUIPÚSCOA, 43/FLUVIÀ",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "43",
		"x": 2.1959771,
		"y": 41.4158412
	},
	{
		"id": 129,
		"address": "C/ MANSO, 46",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "13.0",
		"capacity": "23",
		"x": 2.16113608,
		"y": 41.377046
	},
	{
		"id": 130,
		"address": "RAMBLA DE GUIPÚSCOA, 103 /CANTÀBRIA",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "24",
		"x": 2.2016699,
		"y": 41.4200135
	},
	{
		"id": 131,
		"address": "RAMBLA  DE GUIPÚSCOA, 158/ CA N'OLIVA",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "29",
		"x": 2.2060317,
		"y": 41.4227912
	},
	{
		"id": 132,
		"address": "PL.VALENTÍ ALMIRALL",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "27",
		"x": 2.192042,
		"y": 41.4084796
	},
	{
		"id": 133,
		"address": "GRAN VIA DE LES CORTS CATALANES, 902",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "16",
		"x": 2.1930174,
		"y": 41.4075013
	},
	{
		"id": 134,
		"address": "C/ BAC DE RODA, 157",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "21",
		"x": 2.1987258,
		"y": 41.4113024
	},
	{
		"id": 135,
		"address": "GRAN VIA DE LES CORTS CATALANES,  981",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "21",
		"x": 2.1972673,
		"y": 41.4120452
	},
	{
		"id": 136,
		"address": "GRAN VIA DE LES CORTS CATALANES,  1062",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "31",
		"x": 2.2017955,
		"y": 41.4139298
	},
	{
		"id": 138,
		"address": "GRAN VIA DE LES CORTS CATALANES, 1118",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "21",
		"x": 2.2058345,
		"y": 41.4167933
	},
	{
		"id": 139,
		"address": "GRAN VIA DE LES CORTS CATALANES,  1131",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "35",
		"x": 2.2058133,
		"y": 41.4183999
	},
	{
		"id": 140,
		"address": "C/ VILADOMAT, 122",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "19.0",
		"capacity": "27",
		"x": 2.1559939,
		"y": 41.3808772
	},
	{
		"id": 141,
		"address": "C/ BILBAO, 174",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "32",
		"x": 2.1954152,
		"y": 41.4090202
	},
	{
		"id": 142,
		"address": "C/ SANCHO DE ÁVILA,  104 - C/ BADAJOZ",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "32",
		"x": 2.1924144,
		"y": 41.4003793
	},
	{
		"id": 143,
		"address": "C/ SANCHO DE ÁVILA, 170 / LLACUNA",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "26",
		"x": 2.1956161,
		"y": 41.4027907
	},
	{
		"id": 144,
		"address": "C/ CASTELLA,  28 / DIAGONAL",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.1977119,
		"y": 41.4056269
	},
	{
		"id": 145,
		"address": "C/ PERE IV,  301 / FLUVIÀ",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.2024461,
		"y": 41.4093405
	},
	{
		"id": 146,
		"address": "C/ PERE IV, 488",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "24",
		"x": 2.207186,
		"y": 41.4148983
	},
	{
		"id": 147,
		"address": "RAMBLA PRIM, 79",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "33",
		"x": 2.2124993,
		"y": 41.416043
	},
	{
		"id": 148,
		"address": "RONDA SANT PAU, 79",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "12.0",
		"capacity": "27",
		"x": 2.1633139,
		"y": 41.3783467
	},
	{
		"id": 149,
		"address": "C/ PUJADES, 57B",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.192952,
		"y": 41.3958685
	},
	{
		"id": 150,
		"address": "C/ ESPRONCEDA, 124",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.203028,
		"y": 41.4065912
	},
	{
		"id": 151,
		"address": "C/ PALLARS, 182",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.1969105,
		"y": 41.4003471
	},
	{
		"id": 152,
		"address": "C/ PUJADES, 121",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.1974184,
		"y": 41.3993329
	},
	{
		"id": 153,
		"address": "C/ PUJADES, 173/RBLA POBLE NOU",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "22",
		"x": 2.20077,
		"y": 41.4018686
	},
	{
		"id": 154,
		"address": "C/ PUJADES, 191",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "2.0",
		"capacity": "32",
		"x": 2.2017694,
		"y": 41.4026275
	},
	{
		"id": 155,
		"address": "C/ PUJADES, 311/ FLUVIÀ",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "32",
		"x": 2.2074469,
		"y": 41.4070139
	},
	{
		"id": 156,
		"address": "C/ SELVA DE MAR, 46",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.2088179,
		"y": 41.4091355
	},
	{
		"id": 157,
		"address": "C/ LLULL, 465",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "33",
		"x": 2.2177652,
		"y": 41.4132316
	},
	{
		"id": 158,
		"address": "RAMBLA DE PRIM, 19",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.2183313,
		"y": 41.4116634
	},
	{
		"id": 159,
		"address": "AV. DIAGONAL, 26",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "32",
		"x": 2.2163136,
		"y": 41.4110822
	},
	{
		"id": 160,
		"address": "AV. D'EDUARD MARISTANY, 1 /FORUM",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "33",
		"x": 2.2193724,
		"y": 41.4109763
	},
	{
		"id": 161,
		"address": "C/ RAMON TURRÓ, 91",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.1965965,
		"y": 41.3953011
	},
	{
		"id": 162,
		"address": "C/ RAMON TURRÓ, 292",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "26",
		"x": 2.2084257,
		"y": 41.4038559
	},
	{
		"id": 163,
		"address": "AV. ICÀRIA, 202",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "26",
		"x": 2.2008756,
		"y": 41.3942108
	},
	{
		"id": 164,
		"address": "C/ INDEPENDÈNCIA, 379",
		"postcode": "08026",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "27",
		"x": 2.1778852,
		"y": 41.4118378
	},
	{
		"id": 166,
		"address": "C/ BILBAO, 2",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.206645,
		"y": 41.4008312
	},
	{
		"id": 167,
		"address": "C/ BAC DE RODA, 11",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "21",
		"x": 2.2105777,
		"y": 41.4023354
	},
	{
		"id": 168,
		"address": "SELVA DE MAR / PG. DEL TAULAT",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "26",
		"x": 2.2135818,
		"y": 41.4053697
	},
	{
		"id": 170,
		"address": "AV. LITORAL, 40 (D)",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "54",
		"x": 2.1999572,
		"y": 41.3896642
	},
	{
		"id": 173,
		"address": "AV.LITORAL, 84",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "27",
		"x": 2.2088454,
		"y": 41.3979002
	},
	{
		"id": 174,
		"address": "PG. DE GARCIA FÀRIA, 21/ESPRONCEDA",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "27",
		"x": 2.210191,
		"y": 41.400654
	},
	{
		"id": 175,
		"address": "C/ LLULL, 309",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.2091221,
		"y": 41.4065291
	},
	{
		"id": 176,
		"address": "PG. DE GARCIA FÀRIA, 37/JOSEP FERRATER",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "31",
		"x": 2.2136,
		"y": 41.403216
	},
	{
		"id": 177,
		"address": "C/ ROSSELLÓ, 557",
		"postcode": "08026",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "34",
		"x": 2.1809764,
		"y": 41.4110754
	},
	{
		"id": 178,
		"address": "PG. DE GARCIA FÀRIA, 85",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "27",
		"x": 2.2162094,
		"y": 41.4053649
	},
	{
		"id": 179,
		"address": "PG. ZONA FRANCA, 244",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "16",
		"x": 2.1369015,
		"y": 41.36352
	},
	{
		"id": 180,
		"address": "GRAN VIA DE LES CORTS CATALANES, 179 (D)",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "14.0",
		"capacity": "50",
		"x": 2.1388216,
		"y": 41.3675574
	},
	{
		"id": 182,
		"address": "C/ SANT PERE D´ABANTO, 2",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "18.0",
		"capacity": "33",
		"x": 2.143565,
		"y": 41.371366
	},
	{
		"id": 183,
		"address": "C/ GAVÀ, 1",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "18.0",
		"capacity": "30",
		"x": 2.1419494,
		"y": 41.3723682
	},
	{
		"id": 184,
		"address": "C/ QUETZAL, 22-24",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "27",
		"x": 2.1342316,
		"y": 41.3675438
	},
	{
		"id": 185,
		"address": "C/GAVÀ, 81",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "20.0",
		"capacity": "17",
		"x": 2.1389439,
		"y": 41.3703717
	},
	{
		"id": 186,
		"address": "C/CONSELL DE CENT, 6",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "27.0",
		"capacity": "26",
		"x": 2.1439036,
		"y": 41.3755503
	},
	{
		"id": 187,
		"address": "C/ DE SANT PAU, 89 - 97",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "19",
		"x": 2.1698206,
		"y": 41.3768806
	},
	{
		"id": 188,
		"address": "PG. SANT ANTONI /PL. SANTS",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "30.0",
		"capacity": "27",
		"x": 2.1358571,
		"y": 41.3756948
	},
	{
		"id": 189,
		"address": "C/ BRUC, 130",
		"postcode": "08037",
		"type": "ELECTRICBIKESTATION",
		"altitude": "34.0",
		"capacity": "28",
		"x": 2.1661852,
		"y": 41.3969839
	},
	{
		"id": 190,
		"address": "AV. LITORAL, 72",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "28",
		"x": 2.2078439,
		"y": 41.3961412
	},
	{
		"id": 191,
		"address": "C/ ENTENÇA, 137",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "37",
		"x": 2.147474,
		"y": 41.381951
	},
	{
		"id": 192,
		"address": "C/ JOAN GÜELL, 50",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "21",
		"x": 2.1335494,
		"y": 41.3786364
	},
	{
		"id": 193,
		"address": "C/ FÍGOLS, 1",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "41.0",
		"capacity": "27",
		"x": 2.1289917,
		"y": 41.3812979
	},
	{
		"id": 194,
		"address": "C/ JOAN GÜELL, 98",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "24",
		"x": 2.1323612,
		"y": 41.3812001
	},
	{
		"id": 195,
		"address": "C/ VALLESPIR, 130",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "27",
		"x": 2.1354149,
		"y": 41.3821371
	},
	{
		"id": 196,
		"address": "C/ BERLÍN, 38",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "27",
		"x": 2.1392662,
		"y": 41.3832609
	},
	{
		"id": 197,
		"address": "C/ GELABERT, 1",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "47.0",
		"capacity": "27",
		"x": 2.1410945,
		"y": 41.3871579
	},
	{
		"id": 198,
		"address": "C/ VALLESPIR, 194",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "48.0",
		"capacity": "27",
		"x": 2.1334379,
		"y": 41.3847113
	},
	{
		"id": 199,
		"address": "C/ MEJÍA LEQUERICA, 2",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "47.0",
		"capacity": "27",
		"x": 2.1268625,
		"y": 41.3819739
	},
	{
		"id": 200,
		"address": "C/ JOAN GÜELL, 174",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "47.0",
		"capacity": "23",
		"x": 2.1312876,
		"y": 41.3839045
	},
	{
		"id": 201,
		"address": "C/ NUMÀNCIA, 136",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "55.0",
		"capacity": "24",
		"x": 2.1344218,
		"y": 41.3878061
	},
	{
		"id": 202,
		"address": "C/ DE LES CORTS, 20",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "52.0",
		"capacity": "27",
		"x": 2.1288753,
		"y": 41.3854466
	},
	{
		"id": 203,
		"address": "AV. DIAGONAL, 668",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "64.0",
		"capacity": "33",
		"x": 2.1285766,
		"y": 41.3887069
	},
	{
		"id": 204,
		"address": "AV. DIAGONAL, 672",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "63.0",
		"capacity": "33",
		"x": 2.1256248,
		"y": 41.3880355
	},
	{
		"id": 205,
		"address": "C/ EUROPA, 25",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "57.0",
		"capacity": "33",
		"x": 2.1306737,
		"y": 41.387561
	},
	{
		"id": 207,
		"address": "AV. DIAGONAL, 634",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "62.0",
		"capacity": "25",
		"x": 2.136579,
		"y": 41.3908477
	},
	{
		"id": 208,
		"address": "AV. DIAGONAL, 630",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "59.0",
		"capacity": "33",
		"x": 2.1390667,
		"y": 41.3915195
	},
	{
		"id": 209,
		"address": "C/ DIPUTACIÓ, 200",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "26",
		"x": 2.1610515,
		"y": 41.3857425
	},
	{
		"id": 210,
		"address": "C/ VILARDELL, 18",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "31",
		"x": 2.1422556,
		"y": 41.3745238
	},
	{
		"id": 211,
		"address": "C/ SANCHO DE ÁVILA, 60-64",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "28",
		"x": 2.1902116,
		"y": 41.3987543
	},
	{
		"id": 212,
		"address": "AV. SARRIÀ, 163",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "75.0",
		"capacity": "24",
		"x": 2.1309272,
		"y": 41.3922355
	},
	{
		"id": 213,
		"address": "C/ SANTA FE DE NOU MÈXIC, 2",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "70.0",
		"capacity": "33",
		"x": 2.1345892,
		"y": 41.3935816
	},
	{
		"id": 214,
		"address": "C/ JOSÉ DE  AGULLÓ, 9",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "72.0",
		"capacity": "25",
		"x": 2.1334873,
		"y": 41.3952027
	},
	{
		"id": 215,
		"address": "C/ GANDUXER, 29",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "65.0",
		"capacity": "21",
		"x": 2.1380304,
		"y": 41.3939378
	},
	{
		"id": 216,
		"address": "C/ MADRAZO, 131",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "63.0",
		"capacity": "27",
		"x": 2.1445567,
		"y": 41.3967824
	},
	{
		"id": 217,
		"address": "C/ RECTOR UBACH, 24",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "75.0",
		"capacity": "27",
		"x": 2.1440826,
		"y": 41.3985735
	},
	{
		"id": 218,
		"address": "C/ CONSELL DE CENT, 566",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "39",
		"x": 2.183145,
		"y": 41.4040364
	},
	{
		"id": 219,
		"address": "C/ LAFORJA, 74-76",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "67.0",
		"capacity": "24",
		"x": 2.1471724,
		"y": 41.3976165
	},
	{
		"id": 220,
		"address": "C/ TUSET, 19",
		"postcode": "08006",
		"type": "ELECTRICBIKESTATION",
		"altitude": "53.0",
		"capacity": "27",
		"x": 2.1513154,
		"y": 41.3960982
	},
	{
		"id": 221,
		"address": "GRAN DE GRÀCIA, 155 (METRO FONTANA)",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "68.0",
		"capacity": "24",
		"x": 2.1524704,
		"y": 41.4025392
	},
	{
		"id": 222,
		"address": "C/ DEL CANÓ, 1",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "58.0",
		"capacity": "27",
		"x": 2.1574439,
		"y": 41.4013296
	},
	{
		"id": 223,
		"address": "C/ DE BONAVISTA, 14",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "48.0",
		"capacity": "35",
		"x": 2.1598243,
		"y": 41.3983444
	},
	{
		"id": 224,
		"address": "C / GIRONA, 176",
		"postcode": "08037",
		"type": "ELECTRICBIKESTATION",
		"altitude": "40.0",
		"capacity": "26",
		"x": 2.1644531,
		"y": 41.3999967
	},
	{
		"id": 225,
		"address": "C/ VILADOMAT, 200",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "25",
		"x": 2.15080712464522,
		"y": 41.3848102114671
	},
	{
		"id": 226,
		"address": "C/ MONTMANY, 1",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "52.0",
		"capacity": "27",
		"x": 2.1609345,
		"y": 41.4035608
	},
	{
		"id": 227,
		"address": "C/ DEL TORRENT DE LES FLORS, 102",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "69.0",
		"capacity": "18",
		"x": 2.1586704,
		"y": 41.4078456
	},
	{
		"id": 228,
		"address": "PL. DEL NORD, 5",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "73.0",
		"capacity": "21",
		"x": 2.1558354,
		"y": 41.4068417
	},
	{
		"id": 229,
		"address": "C/ DE LA SANTACREU, 2 (PL.DE LA VIRREINA)",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "68.0",
		"capacity": "28",
		"x": 2.1569161,
		"y": 41.4050968
	},
	{
		"id": 230,
		"address": "C/ DE NIL FABRA, 16-20",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "80.0",
		"capacity": "26",
		"x": 2.1517977,
		"y": 41.4059356
	},
	{
		"id": 231,
		"address": "C/ PAU ALSINA, 54",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "65.0",
		"capacity": "24",
		"x": 2.16400285,
		"y": 41.4092005
	},
	{
		"id": 232,
		"address": "C/ MATA, 2",
		"postcode": "08004",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "27",
		"x": 2.1710273,
		"y": 41.3732903
	},
	{
		"id": 233,
		"address": "C/ NOU DE LA RAMBLA, 164",
		"postcode": "08004",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "27",
		"x": 2.1667829,
		"y": 41.3719688
	},
	{
		"id": 234,
		"address": "PG. DE L´EXPOSICIÓ, 38 /BLASCO GARAY",
		"postcode": "08004",
		"type": "ELECTRICBIKESTATION",
		"altitude": "31.0",
		"capacity": "27",
		"x": 2.162203,
		"y": 41.371532
	},
	{
		"id": 235,
		"address": "AV. PARAL.LEL, 98",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "21",
		"x": 2.1658972,
		"y": 41.3751767
	},
	{
		"id": 236,
		"address": "AV. PARAL.LEL, 194",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "26",
		"x": 2.1523091,
		"y": 41.3751161
	},
	{
		"id": 237,
		"address": "C/ RIUS I TAULET, 4",
		"postcode": "08004",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "27",
		"x": 2.1539198,
		"y": 41.3727426
	},
	{
		"id": 238,
		"address": "C/ ESPRONCEDA, 298",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "27",
		"x": 2.1908473,
		"y": 41.4158807
	},
	{
		"id": 239,
		"address": "C/ INDÚSTRIA, 329",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "31.0",
		"capacity": "35",
		"x": 2.1844769,
		"y": 41.4172922
	},
	{
		"id": 240,
		"address": "C/ JOSEP ESTIVILL, 32",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "27",
		"x": 2.1877153,
		"y": 41.4175595
	},
	{
		"id": 241,
		"address": "C/ TEODOR LLORENTE, 1",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "44.0",
		"capacity": "33",
		"x": 2.18018,
		"y": 41.419178
	},
	{
		"id": 242,
		"address": "C/ RAMON ALBÓ, 1",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "56.0",
		"capacity": "27",
		"x": 2.1773157,
		"y": 41.4244527
	},
	{
		"id": 243,
		"address": "C/ ALEXANDRE GALÍ, 1-5",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "42.0",
		"capacity": "27",
		"x": 2.1812399,
		"y": 41.4239719
	},
	{
		"id": 244,
		"address": "C/ FELIP II, 214",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "44.0",
		"capacity": "27",
		"x": 2.1786224,
		"y": 41.426925
	},
	{
		"id": 245,
		"address": "LA RAMBLA, 101",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "27",
		"x": 2.1717083,
		"y": 41.3826647
	},
	{
		"id": 246,
		"address": "C/ GARCILASO, 77",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "30.0",
		"capacity": "18",
		"x": 2.1866363,
		"y": 41.4228449
	},
	{
		"id": 247,
		"address": "C/ FELIPE II, 112",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "32.0",
		"capacity": "32",
		"x": 2.1849107,
		"y": 41.4219291
	},
	{
		"id": 248,
		"address": "C/ PALÈNCIA, 31",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "18.0",
		"capacity": "26",
		"x": 2.1904005,
		"y": 41.4182129
	},
	{
		"id": 249,
		"address": "C/ ANTILLES, 8",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "27",
		"x": 2.1872818,
		"y": 41.4250835
	},
	{
		"id": 250,
		"address": "C/ PORTUGAL, 3",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "27",
		"x": 2.191206,
		"y": 41.4258248
	},
	{
		"id": 251,
		"address": "C/ CARDENAL TEDESCHINI, 13",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "35.0",
		"capacity": "33",
		"x": 2.1852073,
		"y": 41.4253643
	},
	{
		"id": 252,
		"address": "RAMBLA DE L'ONZE DE SETEMBRE, 31",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "33",
		"x": 2.1932159,
		"y": 41.4298991
	},
	{
		"id": 253,
		"address": "C/ ONZE DE SETEMBRE, 37-39",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "27",
		"x": 2.1922011,
		"y": 41.4298614
	},
	{
		"id": 254,
		"address": "RAMBLA DE L'ONZE DE SETEMBRE, 69",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "26.0",
		"capacity": "26",
		"x": 2.190246,
		"y": 41.4299999
	},
	{
		"id": 255,
		"address": "C/ IRLANDA, 34",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "30.0",
		"capacity": "15",
		"x": 2.18579,
		"y": 41.4315
	},
	{
		"id": 256,
		"address": "C/ MALATS, 28-30",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "32",
		"x": 2.1894423,
		"y": 41.4361251
	},
	{
		"id": 257,
		"address": "C/ SANT ADRIÀ, 2-8",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "27.0",
		"capacity": "24",
		"x": 2.1896502,
		"y": 41.433934
	},
	{
		"id": 258,
		"address": "C/ FERNANDO PESSOA, 45",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "26",
		"x": 2.1929677,
		"y": 41.4425034
	},
	{
		"id": 259,
		"address": "C/ DE BARTRINA, 14",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "34.0",
		"capacity": "24",
		"x": 2.1858025,
		"y": 41.4391174
	},
	{
		"id": 260,
		"address": "CARRER DEL CINCA, 7",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "27",
		"x": 2.1920873,
		"y": 41.4356895
	},
	{
		"id": 261,
		"address": "C/ VILLARROEL, 39",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "32",
		"x": 2.1606534,
		"y": 41.3821314
	},
	{
		"id": 262,
		"address": "C/ ENTENÇA, 70",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "24",
		"x": 2.1516210083712,
		"y": 41.3790954665734
	},
	{
		"id": 263,
		"address": "PG. TORRAS I BAGES, 29",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "20",
		"x": 2.1910691,
		"y": 41.4378773
	},
	{
		"id": 264,
		"address": "C/REPÚBLICA DOMINICANA,25(CENTRE COMERCIAL)",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "20.0",
		"capacity": "33",
		"x": 2.1970692,
		"y": 41.439929
	},
	{
		"id": 265,
		"address": "C/ CASANOVA, 55",
		"postcode": "08011",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "27",
		"x": 2.1592566,
		"y": 41.3847738
	},
	{
		"id": 266,
		"address": "C/ CONCEPCIÓ ARENAL, 176",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "37.0",
		"capacity": "26",
		"x": 2.1842572,
		"y": 41.4268952
	},
	{
		"id": 267,
		"address": "PG. TORRAS I BAGES, 129",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "29.0",
		"capacity": "24",
		"x": 2.1906302,
		"y": 41.4433647
	},
	{
		"id": 268,
		"address": "C/ FERNANDO PESSOA, 72",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "26.0",
		"capacity": "27",
		"x": 2.1929816,
		"y": 41.4457195
	},
	{
		"id": 269,
		"address": "VIA BARCINO, 121",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "26.0",
		"capacity": "20",
		"x": 2.19294,
		"y": 41.448152
	},
	{
		"id": 270,
		"address": "270 - CRTA. DE RIBES, 77 (TRINITAT VELLA)",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "35.0",
		"capacity": "27",
		"x": 2.1898372,
		"y": 41.4486328
	},
	{
		"id": 271,
		"address": "VIA BARCINO, 69",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "20",
		"x": 2.1923629,
		"y": 41.4506081
	},
	{
		"id": 272,
		"address": "C/ CONCEPCIÓ ARENAL, 281",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "32.0",
		"capacity": "26",
		"x": 2.1842021,
		"y": 41.4325013
	},
	{
		"id": 273,
		"address": "AV. MERIDIANA, 404",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "36",
		"x": 2.1834174,
		"y": 41.4304126
	},
	{
		"id": 274,
		"address": "RAMBLA FABRA I PUIG, 67",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "32",
		"x": 2.1849813,
		"y": 41.4299201
	},
	{
		"id": 275,
		"address": "AV. RIO DE JANEIRO, 3",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "32",
		"x": 2.1821802,
		"y": 41.43068
	},
	{
		"id": 276,
		"address": "PLAÇA ALFONS X EL SAVI / RONDA DEL GUINARDO",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "88.0",
		"capacity": "27",
		"x": 2.1652216,
		"y": 41.4121345
	},
	{
		"id": 277,
		"address": "TRAVESSERA DE GRÀCIA, 328",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "60.0",
		"capacity": "27",
		"x": 2.1689962,
		"y": 41.4082107
	},
	{
		"id": 278,
		"address": "TRAVESSERA DE GRÀCIA, 368",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "59.0",
		"capacity": "27",
		"x": 2.1715285,
		"y": 41.4098842
	},
	{
		"id": 279,
		"address": "C/ MAS CASANOVAS, 137",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "75.0",
		"capacity": "27",
		"x": 2.1745567,
		"y": 41.4158995
	},
	{
		"id": 280,
		"address": "C/ SANT ANTONI Mª CLARET, 290-296",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "49.0",
		"capacity": "27",
		"x": 2.1777274,
		"y": 41.4138664
	},
	{
		"id": 281,
		"address": "C/ D'ESCORNALBOU, 51",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "74.0",
		"capacity": "24",
		"x": 2.1763994,
		"y": 41.4180789
	},
	{
		"id": 282,
		"address": "PG. FONT D´EN- FARGAS, 1",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "75.0",
		"capacity": "26",
		"x": 2.1659881,
		"y": 41.4275514
	},
	{
		"id": 283,
		"address": "C/ FULTON, 1",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "76.0",
		"capacity": "20",
		"x": 2.1617032,
		"y": 41.4297231
	},
	{
		"id": 284,
		"address": "AV. DIAGONAL, 652",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "63.0",
		"capacity": "27",
		"x": 2.1314948,
		"y": 41.389462
	},
	{
		"id": 285,
		"address": "C/ MALATS, 98-100",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "35.0",
		"capacity": "16",
		"x": 2.186105,
		"y": 41.4366708
	},
	{
		"id": 286,
		"address": "C/ BOLÍVIA, 76",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "16",
		"x": 2.1913538,
		"y": 41.4030225
	},
	{
		"id": 287,
		"address": "GRAN VIA DE LES CORTS CATALANES, 632",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "16",
		"x": 2.1679313,
		"y": 41.3890626
	},
	{
		"id": 288,
		"address": "PL. VIRREI AMAT",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "55.0",
		"capacity": "32",
		"x": 2.174444,
		"y": 41.4296439
	},
	{
		"id": 289,
		"address": "C/ MÚRCIA, 64",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "27",
		"x": 2.1909952,
		"y": 41.4166982
	},
	{
		"id": 290,
		"address": "PL. DELS JARDINS D'ALFÀBIA, 1",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "66.0",
		"capacity": "17",
		"x": 2.1740962,
		"y": 41.4373376
	},
	{
		"id": 291,
		"address": "C/ CUBELLES, 2",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "57.0",
		"capacity": "27",
		"x": 2.1751572,
		"y": 41.426078
	},
	{
		"id": 292,
		"address": "C/ AMILCAR, 1",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "61.0",
		"capacity": "12",
		"x": 2.1720191,
		"y": 41.4300161
	},
	{
		"id": 293,
		"address": "C/ GRANOLLERS, 1",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "78.0",
		"capacity": "24",
		"x": 2.1629889,
		"y": 41.4283127
	},
	{
		"id": 294,
		"address": "SEU DEL DISTRICTE (NOU BARRIS)",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "72.0",
		"capacity": "24",
		"x": 2.1706752,
		"y": 41.4363473
	},
	{
		"id": 295,
		"address": "C/ SANT ISCLE, 60",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "61.0",
		"capacity": "27",
		"x": 2.1716309,
		"y": 41.433384
	},
	{
		"id": 296,
		"address": "C/ DE ROSSELLÓ I PORCEL, 1/AV.MERIDIANA",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "41.0",
		"capacity": "32",
		"x": 2.1841014,
		"y": 41.4364887
	},
	{
		"id": 297,
		"address": "C/ TURÓ BLAU, 1-3",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "62.0",
		"capacity": "24",
		"x": 2.1767828,
		"y": 41.4388223
	},
	{
		"id": 298,
		"address": "C/ ANDREU NIN, 22",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "41.0",
		"capacity": "33",
		"x": 2.1817718,
		"y": 41.4347233
	},
	{
		"id": 299,
		"address": "C/ DE L'ESCULTOR ORDÓÑEZ, 55",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "53.0",
		"capacity": "27",
		"x": 2.1748267,
		"y": 41.4340849
	},
	{
		"id": 300,
		"address": "C/ DE MALADETA, 1",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "44.0",
		"capacity": "18",
		"x": 2.1769107,
		"y": 41.4315843
	},
	{
		"id": 301,
		"address": "C/ MARIE CURIE, 8-14",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "73.0",
		"capacity": "27",
		"x": 2.1693134,
		"y": 41.4366871
	},
	{
		"id": 302,
		"address": "C/ CAVALLERS, 41",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "111.0",
		"capacity": "32",
		"x": 2.111541,
		"y": 41.3906352
	},
	{
		"id": 303,
		"address": "C/ CAVALLERS, 67",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "101.0",
		"capacity": "27",
		"x": 2.115107,
		"y": 41.3934324
	},
	{
		"id": 304,
		"address": "PG. MANUEL GIRONA, 7",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "78.0",
		"capacity": "27",
		"x": 2.121,
		"y": 41.39038
	},
	{
		"id": 305,
		"address": "AV. DIAGONAL, 680",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "65.0",
		"capacity": "27",
		"x": 2.1237141,
		"y": 41.3875297
	},
	{
		"id": 306,
		"address": "C/ DOCTOR SALVADOR CARDENAL, 1-5",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "60.0",
		"capacity": "31",
		"x": 2.122893,
		"y": 41.3853868
	},
	{
		"id": 307,
		"address": "C/ PINTOR RIBALTA / AV. XILE",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "60.0",
		"capacity": "32",
		"x": 2.1135824,
		"y": 41.3791986
	},
	{
		"id": 308,
		"address": "C/ CARDENAL REIG, 11",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "54.0",
		"capacity": "26",
		"x": 2.114029,
		"y": 41.37684
	},
	{
		"id": 309,
		"address": "C/ SANT RAMON NONAT,  26",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "50.0",
		"capacity": "22",
		"x": 2.1169828,
		"y": 41.3770199
	},
	{
		"id": 310,
		"address": "C/ JOSEP SAMITIER / JOAN XXIII",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "27",
		"x": 2.1190863,
		"y": 41.3812111
	},
	{
		"id": 311,
		"address": "C/ GALLEGO, 2",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "43.0",
		"capacity": "24",
		"x": 2.1202487,
		"y": 41.3785631
	},
	{
		"id": 312,
		"address": "C/ ARIZALA, 77",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "40.0",
		"capacity": "36",
		"x": 2.1233038,
		"y": 41.3789061
	},
	{
		"id": 313,
		"address": "C/ FELIU DE CASANOVA, 1",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "29",
		"x": 2.1297823,
		"y": 41.3754188
	},
	{
		"id": 314,
		"address": "RAMBLA DEL BRASIL, 44",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "35.0",
		"capacity": "24",
		"x": 2.1297303,
		"y": 41.3783067
	},
	{
		"id": 315,
		"address": "C/ DEL GUINARDÓ, 32-38",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "38.0",
		"capacity": "27",
		"x": 2.1817876,
		"y": 41.4156285
	},
	{
		"id": 316,
		"address": "C/ CANTÀBRIA, 55",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "26",
		"x": 2.198071,
		"y": 41.4224015
	},
	{
		"id": 317,
		"address": "RAMBLA DE PRIM, 256",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "27",
		"x": 2.2008632,
		"y": 41.4256626
	},
	{
		"id": 318,
		"address": "C/ CASTILLEJOS, 388",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "77.0",
		"capacity": "32",
		"x": 2.170592,
		"y": 41.412427
	},
	{
		"id": 319,
		"address": "C/ SAGUÉS, 1",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "51.0",
		"capacity": "31",
		"x": 2.1455022,
		"y": 41.3937414
	},
	{
		"id": 321,
		"address": "C/ SANT HERMENEGILD, 30",
		"postcode": "08006",
		"type": "ELECTRICBIKESTATION",
		"altitude": "79.0",
		"capacity": "27",
		"x": 2.1445843,
		"y": 41.4031529
	},
	{
		"id": 322,
		"address": "C/ SANTALÓ, 165",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "106.0",
		"capacity": "24",
		"x": 2.13892,
		"y": 41.4009
	},
	{
		"id": 323,
		"address": "C/ VALLMAJOR, 13",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "88.0",
		"capacity": "27",
		"x": 2.1386719,
		"y": 41.3981616
	},
	{
		"id": 324,
		"address": "C/ REINA VICTORIA, 31",
		"postcode": "08021",
		"type": "ELECTRICBIKESTATION",
		"altitude": "80.0",
		"capacity": "27",
		"x": 2.136346,
		"y": 41.3969455
	},
	{
		"id": 325,
		"address": "C/ ALT DE GIRONELLA, 13",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "82.0",
		"capacity": "23",
		"x": 2.1302775,
		"y": 41.3949601
	},
	{
		"id": 326,
		"address": "C/ BALMES, 409",
		"postcode": "08022",
		"type": "ELECTRICBIKESTATION",
		"altitude": "111.0",
		"capacity": "32",
		"x": 2.1381069,
		"y": 41.4074131
	},
	{
		"id": 327,
		"address": "C/ REUS, 23",
		"postcode": "08022",
		"type": "ELECTRICBIKESTATION",
		"altitude": "114.0",
		"capacity": "24",
		"x": 2.134603,
		"y": 41.4050074
	},
	{
		"id": 328,
		"address": "C/ ARTESA DE SEGRE, 2",
		"postcode": "08022",
		"type": "ELECTRICBIKESTATION",
		"altitude": "106.0",
		"capacity": "27",
		"x": 2.1344691,
		"y": 41.402988
	},
	{
		"id": 329,
		"address": "C/ DE LES ESCOLES PIES, 99",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "121.0",
		"capacity": "27",
		"x": 2.1283866,
		"y": 41.4029965
	},
	{
		"id": 330,
		"address": "C/ PAU ALCOVER, 94",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "108.0",
		"capacity": "27",
		"x": 2.131524,
		"y": 41.401883
	},
	{
		"id": 331,
		"address": "C/ CASTELLNOU, 65",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "95.0",
		"capacity": "31",
		"x": 2.1279409,
		"y": 41.3970497
	},
	{
		"id": 332,
		"address": "C/ DOCTOR ROUX, 86",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "104.0",
		"capacity": "27",
		"x": 2.1281922,
		"y": 41.3998981
	},
	{
		"id": 333,
		"address": "PASSATGE DE SENILLOSA, 3-5",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "94.0",
		"capacity": "27",
		"x": 2.1250451,
		"y": 41.3954723
	},
	{
		"id": 334,
		"address": "PG. BONANOVA, 100",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "117.0",
		"capacity": "26",
		"x": 2.122889,
		"y": 41.400793
	},
	{
		"id": 335,
		"address": "C/ SANTA AMÈLIA, 2",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "92.0",
		"capacity": "27",
		"x": 2.1231228,
		"y": 41.3935355
	},
	{
		"id": 336,
		"address": "C/ CAPONATA, 20",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "101.0",
		"capacity": "27",
		"x": 2.1210928,
		"y": 41.3953855
	},
	{
		"id": 337,
		"address": "C/ CARME KARR, 12-14",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "117.0",
		"capacity": "23",
		"x": 2.1204941,
		"y": 41.3986238
	},
	{
		"id": 338,
		"address": "AV. JOSEP VICENÇ FOIX, 63",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "111.0",
		"capacity": "36",
		"x": 2.1194557,
		"y": 41.3977227
	},
	{
		"id": 339,
		"address": "C/ RAMON TURRÓ, 246",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "2.0",
		"capacity": "27",
		"x": 2.2053803,
		"y": 41.4017084
	},
	{
		"id": 340,
		"address": "C/ SANT ADRIÀ, 113",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "13.0",
		"capacity": "24",
		"x": 2.2047037,
		"y": 41.4361782
	},
	{
		"id": 341,
		"address": "PG. D'ENRIC SANCHIS, 33",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "26",
		"x": 2.2062245,
		"y": 41.4339212
	},
	{
		"id": 342,
		"address": "C/ ROC BORONAT, 134",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.1936584,
		"y": 41.4034967
	},
	{
		"id": 343,
		"address": "CAMPANA DE LA MAQUINISTA (SAO PAULO I PL. DE",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "14.0",
		"capacity": "27",
		"x": 2.1996179,
		"y": 41.4389609
	},
	{
		"id": 344,
		"address": "C/ CIUTAT D'ASUNCIÓN, 73 / POTOSÍ",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "27",
		"x": 2.1996045,
		"y": 41.4431441
	},
	{
		"id": 345,
		"address": "PL. TERESA DE CLARAMUNT/C/ DELS FERROCARILS",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "32",
		"x": 2.1398322,
		"y": 41.3631066
	},
	{
		"id": 346,
		"address": "PG. ZONA FRANCA, 182",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "36",
		"x": 2.138931,
		"y": 41.360798
	},
	{
		"id": 347,
		"address": "C/ ALTS FORNS, 77",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "32",
		"x": 2.1417765,
		"y": 41.3595484
	},
	{
		"id": 348,
		"address": "JARDINS DE CAN FERRERO/PG.DE LA ZONA FRANCA",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "33",
		"x": 2.141563,
		"y": 41.357067
	},
	{
		"id": 349,
		"address": "C/ DE L'ENERGIA, 2 / ALTS FORNS",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "33",
		"x": 2.1371996,
		"y": 41.3573288
	},
	{
		"id": 350,
		"address": "C/ VILLARROEL, 208",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "43.0",
		"capacity": "31",
		"x": 2.1480223,
		"y": 41.392052
	},
	{
		"id": 351,
		"address": "C/ JANE ADDAMS, 26/ CRTA. DEL PRAT",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "33",
		"x": 2.1356187,
		"y": 41.3621232
	},
	{
		"id": 352,
		"address": "C/RADI,10/GRAN VIA DE LES CORTS CATALANES",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "28",
		"x": 2.1341586,
		"y": 41.363279
	},
	{
		"id": 353,
		"address": "C/ MUNNÉ  2-6",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "34.0",
		"capacity": "31",
		"x": 2.1232547,
		"y": 41.37541
	},
	{
		"id": 354,
		"address": "RAMBLA DEL BRASIL, 5",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "27",
		"x": 2.1299539,
		"y": 41.3759419
	},
	{
		"id": 355,
		"address": "C/ RIERA BLANCA, 123",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "27",
		"x": 2.127854,
		"y": 41.371459
	},
	{
		"id": 356,
		"address": "C/ CAMÈLIES, 73",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "106.0",
		"capacity": "27",
		"x": 2.1631012,
		"y": 41.4134503
	},
	{
		"id": 357,
		"address": "C/ CARDENER, 59",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "87.0",
		"capacity": "27",
		"x": 2.1579897,
		"y": 41.4105956
	},
	{
		"id": 358,
		"address": "C/ GOMBAU, 24",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "26",
		"x": 2.1793035,
		"y": 41.3872437
	},
	{
		"id": 359,
		"address": "C/ MÉNDEZ NÚÑEZ, 16",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "12.0",
		"capacity": "26",
		"x": 2.1775594,
		"y": 41.3900544
	},
	{
		"id": 360,
		"address": "C/ BAILÉN, 62",
		"postcode": "08009",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "30",
		"x": 2.1730023,
		"y": 41.3952527
	},
	{
		"id": 361,
		"address": "PG. DE COLOM (LES RAMBLES)",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "33",
		"x": 2.17881,
		"y": 41.37652
	},
	{
		"id": 362,
		"address": "C/ BAILÉN, 100",
		"postcode": "08009",
		"type": "ELECTRICBIKESTATION",
		"altitude": "27.0",
		"capacity": "32",
		"x": 2.1706323,
		"y": 41.396994
	},
	{
		"id": 363,
		"address": "C/ BRUC, 20",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "24",
		"x": 2.1743743,
		"y": 41.3908381
	},
	{
		"id": 364,
		"address": "PG. DE GRÀCIA, 61",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "32.0",
		"capacity": "32",
		"x": 2.1633226,
		"y": 41.393062
	},
	{
		"id": 365,
		"address": "C/ VILADOMAT, 244",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "39.0",
		"capacity": "31",
		"x": 2.1469336,
		"y": 41.387571199999999
	},
	{
		"id": 366,
		"address": "LA RAMBLA, 75",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "18",
		"x": 2.1729755,
		"y": 41.3811389
	},
	{
		"id": 367,
		"address": "C/ MARQUÈS DE SENTMENAT, 46",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "44.0",
		"capacity": "32",
		"x": 2.1376205,
		"y": 41.384972
	},
	{
		"id": 368,
		"address": "C/ DIPUTACIÓ, 373",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "27",
		"x": 2.1756598,
		"y": 41.3968391
	},
	{
		"id": 369,
		"address": "C/ CONSELL DE CENT, 482",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "27",
		"x": 2.1780175,
		"y": 41.40013
	},
	{
		"id": 370,
		"address": "C/ SARDENYA, 326",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "37.0",
		"capacity": "32",
		"x": 2.1729061,
		"y": 41.4039698
	},
	{
		"id": 371,
		"address": "C/ DELS ENAMORATS, 49",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "19.0",
		"capacity": "36",
		"x": 2.181199,
		"y": 41.4040525
	},
	{
		"id": 372,
		"address": "C/ RIBES, 77",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "27",
		"x": 2.1841711,
		"y": 41.4001015
	},
	{
		"id": 373,
		"address": "AV. PARAL.LEL, 132",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "13.0",
		"capacity": "30",
		"x": 2.1613897,
		"y": 41.3750995
	},
	{
		"id": 374,
		"address": "PG. DE GRÀCIA, 89",
		"postcode": "08008",
		"type": "ELECTRICBIKESTATION",
		"altitude": "37.0",
		"capacity": "33",
		"x": 2.1612814,
		"y": 41.3949729
	},
	{
		"id": 375,
		"address": "WORLD TRADE CENTER",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "39",
		"x": 2.1804468,
		"y": 41.3720293
	},
	{
		"id": 376,
		"address": "WORLD  TRADE CENTER",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "39",
		"x": 2.180302,
		"y": 41.3718728
	},
	{
		"id": 377,
		"address": "PL. ICTÍNEO",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "2.0",
		"capacity": "29",
		"x": 2.1836886,
		"y": 41.3776292
	},
	{
		"id": 378,
		"address": "PL. JOAQUIM XIRAU I PALAU, 1",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "21",
		"x": 2.1767427,
		"y": 41.3785379
	},
	{
		"id": 379,
		"address": "AV. JOSEP TARRADELLAS, 27",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "35.0",
		"capacity": "21",
		"x": 2.1420704,
		"y": 41.3829333
	},
	{
		"id": 380,
		"address": "C/ DURAN I BAS, 2",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "24",
		"x": 2.1740155,
		"y": 41.3854094
	},
	{
		"id": 381,
		"address": "C/ AGUSTÍ DURAN I SANPERE, 10",
		"postcode": "8001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "41",
		"x": 2.1677697,
		"y": 41.3816139
	},
	{
		"id": 382,
		"address": "C/ LOPE DE VEGA, 79",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.2041137,
		"y": 41.4038902
	},
	{
		"id": 383,
		"address": "C/ NUMÀNCIA, 2",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "32.0",
		"capacity": "24",
		"x": 2.141767,
		"y": 41.381219
	},
	{
		"id": 384,
		"address": "C/ VILAMARÍ, 85",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "26",
		"x": 2.1468381,
		"y": 41.3807072
	},
	{
		"id": 385,
		"address": "C/ CASANOVA, 119",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "30.0",
		"capacity": "30",
		"x": 2.1552902,
		"y": 41.387888
	},
	{
		"id": 386,
		"address": "AV. PARAL.LEL 164",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "3",
		"x": 2.1568773,
		"y": 41.3751866
	},
	{
		"id": 387,
		"address": "C/ NÀPOLS, 125",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "32",
		"x": 2.1787074,
		"y": 41.3957813
	},
	{
		"id": 388,
		"address": "C/ RIERA ALTA, 6",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "34",
		"x": 2.1671611,
		"y": 41.3806411
	},
	{
		"id": 389,
		"address": "RECINTE PARC DE LA CIUTADELLA",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "27",
		"x": 2.1875446,
		"y": 41.3873901
	},
	{
		"id": 390,
		"address": "C/ COMERÇ, 36",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "25",
		"x": 2.1820169,
		"y": 41.3869612
	},
	{
		"id": 391,
		"address": "C/ GRAN DE LA SAGRERA, 74",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "27",
		"x": 2.1913753,
		"y": 41.4230551
	},
	{
		"id": 392,
		"address": "C/ RAMON TURRÓ, 4",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "19",
		"x": 2.1906339,
		"y": 41.3905303
	},
	{
		"id": 393,
		"address": "C/ LLACUNA, 86",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "31",
		"x": 2.1976297,
		"y": 41.4022657
	},
	{
		"id": 394,
		"address": "C/ DIPUTACIÓ, 226",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "27",
		"x": 2.1631263,
		"y": 41.3873057
	},
	{
		"id": 395,
		"address": "PL. CATALUNYA, 22",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "33",
		"x": 2.1702467,
		"y": 41.3860607
	},
	{
		"id": 396,
		"address": "C/ JOAN MIRÓ, 2-12",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "32",
		"x": 2.1968267,
		"y": 41.3890253
	},
	{
		"id": 397,
		"address": "AV. LITORAL (PG MARÍTIM DEL PORT OLÍMPIC)",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "27",
		"x": 2.1993105,
		"y": 41.3889129
	},
	{
		"id": 398,
		"address": "PG. MARÍTIM DE LA BARCELONETA/ANDREA DÒRIA",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "35",
		"x": 2.1934636,
		"y": 41.380955
	},
	{
		"id": 399,
		"address": "C/ PAVIA, 3",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "23.0",
		"capacity": "27",
		"x": 2.1332694,
		"y": 41.3734706
	},
	{
		"id": 400,
		"address": "MOLL ORIENTAL",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "44",
		"x": 2.1879597,
		"y": 41.3694508
	},
	{
		"id": 401,
		"address": "PLA DE PALAU",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "24",
		"x": 2.183723,
		"y": 41.382418
	},
	{
		"id": 402,
		"address": "PG. DE COLOM (VIA LAIETANA)",
		"postcode": "08002",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "31",
		"x": 2.1821917,
		"y": 41.380628
	},
	{
		"id": 403,
		"address": "C/ VALLESPIR, 49",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "32.0",
		"capacity": "22",
		"x": 2.1368202,
		"y": 41.3796421
	},
	{
		"id": 404,
		"address": "C/ JUAN GRIS, 28",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "32",
		"x": 2.1331357,
		"y": 41.3653426
	},
	{
		"id": 405,
		"address": "C/ COMTE BORRELL, 198",
		"postcode": "08029",
		"type": "ELECTRICBIKESTATION",
		"altitude": "28.0",
		"capacity": "26",
		"x": 2.1521802,
		"y": 41.3854003
	},
	{
		"id": 406,
		"address": "GRAN VIA DE LES CORTS CATALANES, 592",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "33",
		"x": 2.1646697,
		"y": 41.3863747
	},
	{
		"id": 408,
		"address": "C/ RAMON TRIAS FARGAS, 23",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "39",
		"x": 2.1923283,
		"y": 41.3889972
	},
	{
		"id": 409,
		"address": "C/ JOAN D'ÀUSTRIA, 31B",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.1925059,
		"y": 41.392384
	},
	{
		"id": 410,
		"address": "PG.DE COLOM (LES RAMBLES)",
		"postcode": "08039",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "38",
		"x": 2.17871,
		"y": 41.376433
	},
	{
		"id": 411,
		"address": "C/ JOSEP PLA, 67",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "24",
		"x": 2.2122054,
		"y": 41.411381
	},
	{
		"id": 412,
		"address": "PL. URQUINAONA, 3",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "27",
		"x": 2.1727457,
		"y": 41.3893094
	},
	{
		"id": 413,
		"address": "C/ BRUC, 66",
		"postcode": "08009",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "32",
		"x": 2.1707419,
		"y": 41.393489
	},
	{
		"id": 414,
		"address": "C/ CASP, 67",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "33",
		"x": 2.1764275,
		"y": 41.3937234
	},
	{
		"id": 415,
		"address": "RAMBLA DEL RAVAL, 13",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "25",
		"x": 2.1689592,
		"y": 41.3793558
	},
	{
		"id": 416,
		"address": "RAMBLA DEL RAVAL, 20",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "27",
		"x": 2.1696744,
		"y": 41.3781065
	},
	{
		"id": 417,
		"address": "C/ VILLAR, 2",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "32",
		"x": 2.1801094,
		"y": 41.4164824
	},
	{
		"id": 418,
		"address": "PG. DE LLUíS COMPANYS (ARC DE TRIOMF)",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "27",
		"x": 2.1801142,
		"y": 41.391062
	},
	{
		"id": 419,
		"address": "PG. DE LLUIS COMPANYS (ARC DE TRIOMF)",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "33",
		"x": 2.1808391,
		"y": 41.391313
	},
	{
		"id": 420,
		"address": "GRAN VIA DE LES CORTS CATALANES, 368",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "27",
		"x": 2.1479385,
		"y": 41.3743329
	},
	{
		"id": 421,
		"address": "C/ VALLESPIR, 13",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "30.0",
		"capacity": "25",
		"x": 2.1378667,
		"y": 41.378118
	},
	{
		"id": 422,
		"address": "C/ JORDI GIRONA, 29",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "82.0",
		"capacity": "28",
		"x": 2.1154135,
		"y": 41.3881175
	},
	{
		"id": 423,
		"address": "C/ HONDURAS, 32-34",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "32",
		"x": 2.1894852,
		"y": 41.4202459
	},
	{
		"id": 424,
		"address": "PG. MARÍTIM DE LA BARCELONETA",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "7.0",
		"capacity": "26",
		"x": 2.1925198,
		"y": 41.3795862
	},
	{
		"id": 425,
		"address": "C/ DE CERVELLÓ, 5",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "24",
		"x": 2.1748621,
		"y": 41.3765618
	},
	{
		"id": 426,
		"address": "C/ DE RIBES, 59 B",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "12.0",
		"capacity": "33",
		"x": 2.1830315,
		"y": 41.39828
	},
	{
		"id": 427,
		"address": "C/ DE SANT PAU, 119/ RONDA SANT PAU",
		"postcode": "08001",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "26",
		"x": 2.1680021,
		"y": 41.3754047
	},
	{
		"id": 428,
		"address": "C/ PUJADES, 103",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.1960799,
		"y": 41.3983902
	},
	{
		"id": 429,
		"address": "C/ GRAN CAPITÀ, 9",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "105.0",
		"capacity": "28",
		"x": 2.1091535,
		"y": 41.3881262
	},
	{
		"id": 430,
		"address": "C/ ALFAMBRA, 2 | AV. DIAGONAL",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "77.0",
		"capacity": "28",
		"x": 2.113096,
		"y": 41.385641
	},
	{
		"id": 431,
		"address": "AV. JOAN XXIII, 17",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "53.0",
		"capacity": "20",
		"x": 2.122175,
		"y": 41.383467
	},
	{
		"id": 432,
		"address": "C/ MARTÍ I FRANQUÈS, 1",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "63.0",
		"capacity": "28",
		"x": 2.1170751,
		"y": 41.3847061
	},
	{
		"id": 433,
		"address": "C/ JOHN MAYNARD KEYNES, 2 | AV. DIAGONAL",
		"postcode": "08034",
		"type": "ELECTRICBIKESTATION",
		"altitude": "70.0",
		"capacity": "42",
		"x": 2.1168609,
		"y": 41.3862258
	},
	{
		"id": 434,
		"address": "C/ ROGER, 24",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "34.0",
		"capacity": "27",
		"x": 2.1269152,
		"y": 41.3767538
	},
	{
		"id": 435,
		"address": "AV. DOCTOR MARAÑON, 25 | C/ PAU GARGALLO",
		"postcode": "08028",
		"type": "ELECTRICBIKESTATION",
		"altitude": "64.0",
		"capacity": "28",
		"x": 2.112186,
		"y": 41.383585
	},
	{
		"id": 436,
		"address": "PG. ZONA FRANCA, 54",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "6.0",
		"capacity": "19",
		"x": 2.1433038,
		"y": 41.3545425
	},
	{
		"id": 437,
		"address": "PG. ZONA FRANCA, 9",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "36",
		"x": 2.1450958,
		"y": 41.3513237
	},
	{
		"id": 438,
		"address": "C/ NÀPOLS, 183",
		"postcode": "08013",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "27",
		"x": 2.1754896,
		"y": 41.3981669
	},
	{
		"id": 439,
		"address": "RBLA. BADAL, 73 | C/ CONSTITUCIÓ",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "14.0",
		"capacity": "18",
		"x": 2.1328403,
		"y": 41.3685394
	},
	{
		"id": 440,
		"address": "C/ SELVA DE MAR, 230",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "9.0",
		"capacity": "27",
		"x": 2.1976864,
		"y": 41.417694
	},
	{
		"id": 441,
		"address": "C/ WATT, 2",
		"postcode": "08014",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "18",
		"x": 2.1398409,
		"y": 41.3754426
	},
	{
		"id": 442,
		"address": "C/ MINERIA, 30",
		"postcode": "08038",
		"type": "ELECTRICBIKESTATION",
		"altitude": "11.0",
		"capacity": "18",
		"x": 2.138599,
		"y": 41.3649272
	},
	{
		"id": 443,
		"address": "C/ CASANOVA, 139",
		"postcode": "08036",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "32",
		"x": 2.1542277,
		"y": 41.3887127
	},
	{
		"id": 444,
		"address": "C/ LLEIDA, 40",
		"postcode": "08004",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "27",
		"x": 2.1554047,
		"y": 41.3717304
	},
	{
		"id": 445,
		"address": "C/ VILAMARÍ, 2",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "21.0",
		"capacity": "24",
		"x": 2.154004,
		"y": 41.3755016
	},
	{
		"id": 446,
		"address": "PG. JOAN DE BORBÓ, 42",
		"postcode": "08003",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "15",
		"x": 2.1884228,
		"y": 41.3779974
	},
	{
		"id": 447,
		"address": "C/ ALMOGÀVERS, 63",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "10.0",
		"capacity": "27",
		"x": 2.1860256,
		"y": 41.3943033
	},
	{
		"id": 448,
		"address": "C/ RAMÓN TURRÓ, 160",
		"postcode": "08005",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.1997869,
		"y": 41.3972809
	},
	{
		"id": 449,
		"address": "C/ BOLIVIA, 120",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "5.0",
		"capacity": "27",
		"x": 2.1949461,
		"y": 41.4058109
	},
	{
		"id": 450,
		"address": "C/ CRISTOBAL DE MOURA, 84",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "3.0",
		"capacity": "27",
		"x": 2.2061691,
		"y": 41.410712
	},
	{
		"id": 451,
		"address": "C/ PALLARS, 504",
		"postcode": "08019",
		"type": "ELECTRICBIKESTATION",
		"altitude": "4.0",
		"capacity": "24",
		"x": 2.2150487,
		"y": 41.4140598
	},
	{
		"id": 452,
		"address": "GRAN VIA DE LES CORTS CATALANES, 1157 (D)",
		"postcode": "08020",
		"type": "ELECTRICBIKESTATION",
		"altitude": "8.0",
		"capacity": "54",
		"x": 2.20934,
		"y": 41.4194972
	},
	{
		"id": 454,
		"address": "C/ SARDENYA, 402",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "56.0",
		"capacity": "27",
		"x": 2.1684799,
		"y": 41.4072349
	},
	{
		"id": 456,
		"address": "C/ MÚRCIA, 1",
		"postcode": "08026",
		"type": "ELECTRICBIKESTATION",
		"altitude": "22.0",
		"capacity": "21",
		"x": 2.1874539,
		"y": 41.4143392
	},
	{
		"id": 457,
		"address": "C/ GRANADELLA, 10-19 | C/ SAS",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "12.0",
		"capacity": "18",
		"x": 2.2039823,
		"y": 41.4383117
	},
	{
		"id": 458,
		"address": "C/ TUCUMÁN, 21",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "17.0",
		"capacity": "24",
		"x": 2.2010422,
		"y": 41.4457962
	},
	{
		"id": 459,
		"address": "PG. SANTA COLOMA, 105",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "39",
		"x": 2.1976757,
		"y": 41.4479402
	},
	{
		"id": 460,
		"address": "C/ MIREIA, 28",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "56.0",
		"capacity": "15",
		"x": 2.1894717,
		"y": 41.4513863
	},
	{
		"id": 461,
		"address": "AV. RIO DE JANEIRO, 118",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "43.0",
		"capacity": "28",
		"x": 2.185727,
		"y": 41.442489
	},
	{
		"id": 462,
		"address": "C/ PALAMÓS, 33",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "61.0",
		"capacity": "28",
		"x": 2.184857,
		"y": 41.446923
	},
	{
		"id": 463,
		"address": "C/ PEDROSA, 24",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "68.0",
		"capacity": "24",
		"x": 2.1833801,
		"y": 41.4490679
	},
	{
		"id": 464,
		"address": "AV. RIO DE JANEIRO, 96",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "47.0",
		"capacity": "24",
		"x": 2.182335,
		"y": 41.439692
	},
	{
		"id": 465,
		"address": "C/ ROSSELLÓ, 261",
		"postcode": "08008",
		"type": "ELECTRICBIKESTATION",
		"altitude": "41.0",
		"capacity": "27",
		"x": 2.1599427,
		"y": 41.3954094
	},
	{
		"id": 466,
		"address": "C/ PABLO IGLESIAS, 21",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "63.0",
		"capacity": "29",
		"x": 2.1813051,
		"y": 41.443387
	},
	{
		"id": 467,
		"address": "PL. JESÚS CARRASCO",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "93.0",
		"capacity": "20",
		"x": 2.176726,
		"y": 41.4450463
	},
	{
		"id": 468,
		"address": "C/ NOU BARRIS, 23",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "107.0",
		"capacity": "18",
		"x": 2.1775154,
		"y": 41.4480464
	},
	{
		"id": 469,
		"address": "C/ SANT FRANCESC XAVIER, 1",
		"postcode": "08016",
		"type": "ELECTRICBIKESTATION",
		"altitude": "72.0",
		"capacity": "18",
		"x": 2.1781553,
		"y": 41.4417001
	},
	{
		"id": 470,
		"address": "C/ GÒNGORA, 23",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "93.0",
		"capacity": "24",
		"x": 2.1746238,
		"y": 41.4432762
	},
	{
		"id": 471,
		"address": "PG. VALLDAURA, 171",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "78.0",
		"capacity": "24",
		"x": 2.1715576,
		"y": 41.4389014
	},
	{
		"id": 472,
		"address": "VIA FAVÈNCIA, 186",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "105.0",
		"capacity": "24",
		"x": 2.170393,
		"y": 41.4427374
	},
	{
		"id": 473,
		"address": "PG. FABRA I PUIG, 449",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "94.0",
		"capacity": "31",
		"x": 2.1657506,
		"y": 41.4388644
	},
	{
		"id": 474,
		"address": "VIA FAVÈNCIA, 47",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "102.0",
		"capacity": "24",
		"x": 2.1664224,
		"y": 41.4418604
	},
	{
		"id": 475,
		"address": "C/ CAMPO FLORIDO, 66",
		"postcode": "08027",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "19",
		"x": 2.1799878,
		"y": 41.4216738
	},
	{
		"id": 476,
		"address": "C/ PERIODISTES, 9",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "80.0",
		"capacity": "18",
		"x": 2.174401,
		"y": 41.422037
	},
	{
		"id": 477,
		"address": "C/ AMILCAR, 78",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "69.0",
		"capacity": "26",
		"x": 2.1722534,
		"y": 41.4260751
	},
	{
		"id": 478,
		"address": "C/ ESCULTOR LLIMONA, 7",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "65.0",
		"capacity": "30",
		"x": 2.1697582,
		"y": 41.4276076
	},
	{
		"id": 479,
		"address": "PG. FABRA I PUIG, 344",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "73.0",
		"capacity": "18",
		"x": 2.1671068,
		"y": 41.430623
	},
	{
		"id": 480,
		"address": "PG. FABRA I PUIG, 385",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "92.0",
		"capacity": "28",
		"x": 2.1629258,
		"y": 41.4333259
	},
	{
		"id": 481,
		"address": "PG. FABRA I PUIG, 411",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "89.0",
		"capacity": "26",
		"x": 2.163872,
		"y": 41.4357978
	},
	{
		"id": 482,
		"address": "PG. UNIVERSAL, 29 | C/ DOCTOR LETAMENDI",
		"postcode": "08042",
		"type": "ELECTRICBIKESTATION",
		"altitude": "95.0",
		"capacity": "20",
		"x": 2.1620235,
		"y": 41.4372022
	},
	{
		"id": 483,
		"address": "C/ LISBOA, 1",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "79.0",
		"capacity": "29",
		"x": 2.15896845634459,
		"y": 41.4295617350765
	},
	{
		"id": 484,
		"address": "C/ EDUARD TODA, 33 | C/ DOCTOR LETAMENDI",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "104.0",
		"capacity": "27",
		"x": 2.1585268,
		"y": 41.4345997
	},
	{
		"id": 485,
		"address": "PG. VALLDAURA, 26",
		"postcode": "08031",
		"type": "ELECTRICBIKESTATION",
		"altitude": "121.0",
		"capacity": "27",
		"x": 2.1565742,
		"y": 41.4374904
	},
	{
		"id": 486,
		"address": "C/ PORTO, 35 | AV. ESTATUT DE CATALUNYA",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "81.0",
		"capacity": "28",
		"x": 2.1564551,
		"y": 41.4306102
	},
	{
		"id": 487,
		"address": "C/ LISBOA, 128",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "98.0",
		"capacity": "27",
		"x": 2.1521909,
		"y": 41.4267638
	},
	{
		"id": 488,
		"address": "AV. CAN MARCET, 36",
		"postcode": "08035",
		"type": "ELECTRICBIKESTATION",
		"altitude": "132.0",
		"capacity": "27",
		"x": 2.147904,
		"y": 41.4347859
	},
	{
		"id": 489,
		"address": "C/ JORGE MANRIQUE, 15",
		"postcode": "08035",
		"type": "ELECTRICBIKESTATION",
		"altitude": "119.0",
		"capacity": "27",
		"x": 2.1499103,
		"y": 41.4312335
	},
	{
		"id": 490,
		"address": "PG. VALL D'HEBRÓN, 168",
		"postcode": "08035",
		"type": "ELECTRICBIKESTATION",
		"altitude": "150.0",
		"capacity": "50",
		"x": 2.1443777,
		"y": 41.4280668
	},
	{
		"id": 491,
		"address": "C/ PARE MARIANA, 24",
		"postcode": "08035",
		"type": "ELECTRICBIKESTATION",
		"altitude": "125.0",
		"capacity": "27",
		"x": 2.1456449,
		"y": 41.4306689
	},
	{
		"id": 492,
		"address": "PL. TETUAN",
		"postcode": "08010",
		"type": "ELECTRICBIKESTATION",
		"altitude": "18.0",
		"capacity": "24",
		"x": 2.1751709,
		"y": 41.3943454
	},
	{
		"id": 493,
		"address": "PG. VALL D'HEBRÓN, 80",
		"postcode": "08023",
		"type": "ELECTRICBIKESTATION",
		"altitude": "166.0",
		"capacity": "24",
		"x": 2.1401823,
		"y": 41.419965
	},
	{
		"id": 494,
		"address": "RAMBLA CATALUNYA/DIPUTACIO",
		"postcode": "08007",
		"type": "ELECTRICBIKESTATION",
		"altitude": "25.0",
		"capacity": "24",
		"x": 2.1652199,
		"y": 41.3896967
	},
	{
		"id": 495,
		"address": "C/ DIPUTACIÓ, 22",
		"postcode": "08015",
		"type": "ELECTRICBIKESTATION",
		"altitude": "24.0",
		"capacity": "21",
		"x": 2.150523,
		"y": 41.377846
	},
	{
		"id": 496,
		"address": "C/ PROVENÇA, 445",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "33.0",
		"capacity": "18",
		"x": 2.174799,
		"y": 41.4048623
	},
	{
		"id": 497,
		"address": "PTGE. MALUQUER, 16",
		"postcode": "08022",
		"type": "ELECTRICBIKESTATION",
		"altitude": "124.0",
		"capacity": "27",
		"x": 2.1360313,
		"y": 41.4095489
	},
	{
		"id": 498,
		"address": "C/ ESTEVE TERRADAS, 42",
		"postcode": "08023",
		"type": "ELECTRICBIKESTATION",
		"altitude": "145.0",
		"capacity": "26",
		"x": 2.1402433,
		"y": 41.4144967
	},
	{
		"id": 499,
		"address": "AV. VALLCARCA, 196",
		"postcode": "08023",
		"type": "ELECTRICBIKESTATION",
		"altitude": "127.0",
		"capacity": "27",
		"x": 2.1421504,
		"y": 41.4160558
	},
	{
		"id": 500,
		"address": "C/ ARGENTERA, 23",
		"postcode": "08023",
		"type": "ELECTRICBIKESTATION",
		"altitude": "101.0",
		"capacity": "23",
		"x": 2.1453424,
		"y": 41.4117633
	},
	{
		"id": 501,
		"address": "C/ ELISA, 1",
		"postcode": "08023",
		"type": "ELECTRICBIKESTATION",
		"altitude": "95.0",
		"capacity": "16",
		"x": 2.1420204,
		"y": 41.4052698
	},
	{
		"id": 502,
		"address": "AV. VALLCARCA, 11",
		"postcode": "08023",
		"type": "ELECTRICBIKESTATION",
		"altitude": "88.0",
		"capacity": "19",
		"x": 2.1492066,
		"y": 41.4074444
	},
	{
		"id": 503,
		"address": "C/ MAIGNON, 31-41",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "105.0",
		"capacity": "30",
		"x": 2.1524953,
		"y": 41.4095926
	},
	{
		"id": 504,
		"address": "C/ MASSENS, 76",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "87.0",
		"capacity": "28",
		"x": 2.1557747,
		"y": 41.4092333
	},
	{
		"id": 505,
		"address": "C/ CAMÈLIES, 78",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "118.0",
		"capacity": "27",
		"x": 2.1658677,
		"y": 41.4145614
	},
	{
		"id": 506,
		"address": "C/ GARRIGA I ROCA, 2",
		"postcode": "08041",
		"type": "ELECTRICBIKESTATION",
		"altitude": "107.0",
		"capacity": "15",
		"x": 2.1718497,
		"y": 41.4191957
	},
	{
		"id": 507,
		"address": "C/ SARDENYA, 494",
		"postcode": "08024",
		"type": "ELECTRICBIKESTATION",
		"altitude": "81.0",
		"capacity": "24",
		"x": 2.1640965,
		"y": 41.4107641
	},
	{
		"id": 508,
		"address": "C/ SARDENYA, 465",
		"postcode": "08025",
		"type": "ELECTRICBIKESTATION",
		"altitude": "70.0",
		"capacity": "27",
		"x": 2.1656378,
		"y": 41.4090922
	},
	{
		"id": 509,
		"address": "C/ TORRENT DE L'OLLA, 11",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "46.0",
		"capacity": "32",
		"x": 2.1606736,
		"y": 41.3989713
	},
	{
		"id": 511,
		"address": "C/ GRAN DE GRÀCIA, 91",
		"postcode": "08012",
		"type": "ELECTRICBIKESTATION",
		"altitude": "61.0",
		"capacity": "20",
		"x": 2.1543317,
		"y": 41.4006862
	},
	{
		"id": 512,
		"address": "C/ D'ALACANT, 12",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "96.0",
		"capacity": "27",
		"x": 2.1326911,
		"y": 41.4000778
	},
	{
		"id": 513,
		"address": "VIA AUGUSTA, 317",
		"postcode": "08017",
		"type": "ELECTRICBIKESTATION",
		"altitude": "111.0",
		"capacity": "28",
		"x": 2.124329,
		"y": 41.399017
	},
	{
		"id": 514,
		"address": "C/ ARAGÓ, 614",
		"postcode": "08018",
		"type": "ELECTRICBIKESTATION",
		"altitude": "16.0",
		"capacity": "18",
		"x": 2.1885055,
		"y": 41.4095069
	},
	{
		"id": 515,
		"address": "C/ SANT ADRIÀ, 43",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "19.0",
		"capacity": "24",
		"x": 2.1948002,
		"y": 41.4352071
	},
	{
		"id": 516,
		"address": "C/ SANT ADRIÀ, 88",
		"postcode": "08030",
		"type": "ELECTRICBIKESTATION",
		"altitude": "15.0",
		"capacity": "21",
		"x": 2.2001569,
		"y": 41.4354601
	},
	{
		"id": 517,
		"address": "AV. RASOS DE PEGUERA, 10",
		"postcode": "08033",
		"type": "ELECTRICBIKESTATION",
		"altitude": "44.0",
		"capacity": "20",
		"x": 2.178959,
		"y": 41.462095
	},
	{
		"id": 518,
		"address": "C/ LLOBREGÓS, 115",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "112.0",
		"capacity": "27",
		"x": 2.1570492,
		"y": 41.4246885
	},
	{
		"id": 519,
		"address": "C/ PEDRELL, 52",
		"postcode": "08032",
		"type": "ELECTRICBIKESTATION",
		"altitude": "110.0",
		"capacity": "24",
		"x": 2.166289,
		"y": 41.4246548
	}
]
