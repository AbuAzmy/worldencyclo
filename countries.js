const assets = "assets/";

const countries = {
	china: {
		ename: "china",
		arname: "الصين",
		continent: "اسيا",
		capital: "بكين",
		population: "1.402 مليار (2020)",
		area: "9,597,000 كم²",
		language: "الصينية",
		relegion: "متعدد",
		currency: "اليوان الصيني",
		anthem: `${assets}audio/china.mp3`,
	},
	egypt: {
		ename: "egypt",
		arname: "مصر",
		continent: "افريقيا",
		capital: "القاهرة",
		population: "102.3 مليون (2020)",
		area: "1,010,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الجنيه المصري",
		anthem: `${assets}audio/egypt.mp3`,
	},
	congo: {
		ename: "congo",
		arname: "الكونغو",
		continent: "افريقيا",
		capital: "برازفيل",
		population: "89.56 مليون (2020)",
		area: "2,345,000 كم²",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "فرنك كونغولي",
		anthem: `${assets}audio/congo.mp3`,
	},
	usa: {
		ename: "usa",
		arname: "الولايات المتحدة",
		continent: "امريكا الشمالية",
		capital: "واشنطن",
		population: "329.5 مليون (2020)",
		area: "9,834,000 كم²",
		language: "الانجليزية",
		relegion: "المسيحية",
		currency: "الدولار الامريكي",
		anthem: `${assets}audio/usa.mp3`,
	},
	germany: {
		ename: "germany",
		arname: "المانيا",
		continent: "اوروبا",
		capital: "برلين",
		population: "83.24 مليون (2020)",
		area: "357,386 كم²",
		language: "الالمانية",
		relegion: "المسيحية",
		currency: "اليورو",
		anthem: `${assets}audio/germany.mp3`,
	},
	saudia: {
		ename: "saudia",
		arname: "السعودية",
		continent: "اسيا",
		capital: "الرياض",
		population: "34.81 مليون (2020)",
		area: "2,150,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الريال السعودي",
		anthem: `${assets}audio/saudia.mp3`,
	},
	palestine: {
		ename: "palestine",
		arname: "فلسطين",
		continent: "اسيا",
		capital: "القدس",
		population: "4.803 مليون (2020)",
		area: "27,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الشيكل ال'اسرائيلي'",
		anthem: `${assets}audio/palestine.mp3`,
	},
	japan: {
		ename: "japan",
		arname: "اليابان",
		continent: "اسيا",
		capital: "طوكيو",
		population: "125.8 مليون (2020)",
		area: "377,975 كم²",
		language: "اليابانية",
		relegion: "الشنتو",
		currency: "ين ياباني",
		anthem: `${assets}audio/japan.mp3`,
	},
	colombia: {
		ename: "colombia",
		arname: "كولومبيا",
		continent: "امريكا الجنوبية",
		capital: "بوغوتا",
		population: "50.88 مليون (2020)",
		area: "1,143,000 كم²",
		language: "الاسبانية",
		relegion: "المسيحية",
		currency: "بيزو كولومبي",
		anthem: `${assets}audio/colombia.mp3`,
	},
	england: {
		ename: "england",
		arname: "بريطانيا",
		continent: "اوروبا",
		capital: "لندن",
		population: "67.22 مليون (2020)",
		area: "242,495 كم²",
		language: "الانجليزية",
		relegion: "المسيحية",
		currency: "الجنيه الاسترليني",
		anthem: `${assets}audio/england.mp3`,
	},
	france: {
		ename: "france",
		arname: "فرنسا",
		continent: "اوروبا",
		capital: "باريس",
		population: "67.39 مليون (2020)",
		area: "632,734 كم²",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "اليورو",
		anthem: `${assets}audio/france.mp3`,
	},
	algeria: {
		ename: "algeria",
		arname: "الجزائر",
		continent: "افريقيا",
		capital: "الجزائر العاصمة",
		population: "43.85 مليون (2020)",
		area: "2,382,000 كم²",
		language: "العربية",
		relegion: "الاسلام",
		currency: "الدينار الجزائري",
		anthem: `${assets}audio/algeria.mp3`,
	},
	australia: {
		ename: "australia",
		arname: "استراليا",
		continent: "الاوقيانوسية",
		capital: "كانبرا",
		population: "25.69 مليون (2020)",
		area: "7,692,000 كم²",
		language: "الانجليزية",
		relegion: "المسيحية",
		currency: "دولار أسترالي",
		anthem: `${assets}audio/australia.mp3`,
	},
	canada: {
		ename: "canada",
		arname: "كندا",
		continent: "امريكا الشمالية",
		capital: "اوتاوا",
		population: "38.01 مليون (2020)",
		area: "9,985,000 كم²",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: "دولار كندي",
		anthem: `${assets}audio/canada.mp3`,
	},
	venzuela: {
		ename: "venzuela",
		arname: "فنزويلا",
		continent: "امريكا الجنوبية",
		capital: "كاراكاس",
		population: "28.44 مليون (2020)",
		area: "916,445 كم²",
		language: "ايش عرفني",
		relegion: "المسيحية",
		currency: "بوليفار فنزويلي",
		anthem: `${assets}audio/venezuela.mp3`,
	},
	tunisia: {
		ename: "tunisia",
		arname: "تونس",
		continent: "افريقيا",
		capital: "تونس",
		population: "10,102,000 (2020) مليون",
		area: "163,610 كم² ",
		language: "العربية",
		relegion: "الاسلام",
		currency: "دينار تونسي",
		anthem: `${assets}audio/tunisia.mp3`,
	},
	libya: {
		ename: "libya",
		arname: "ليبيا",
		continent: "أفريقيا",
		capital: "طرابلس",
		population: "6.871 مليون (2020)",
		area: "1,760,000 كم² ",
		language: "العربية",
		relegion: "الاسلام",
		currency: "دينار ليبي",
		anthem: `${assets}audio/libya.mp3`,
	},
	angola: {
		ename: "Angola",
		arname: "انغولا",
		continent: "أفريقيا",
		capital: "لواندا",
		population: "32.87 مليون (2020)",
		area: "1,247,000 كم² ",
		language: "البرتغالية",
		relegion: "المسيحية",
		currency: " كوانزا أنغولي",
		anthem: `${assets}audio/Angola.mp3`,
	},
	benin: {
		ename: "Benin",
		arname: "بنين",
		continent: "أفريقيا",
		capital: "بورتو نوفو",
		population: "12.12 مليون (2020)",
		area: "114,763 كم² ",
		language: "الفرنسية",
		relegion: "المسيحية",
		currency: " فرنك غرب أفريقي ",
		anthem: `${assets}audio/Angola.mp3`,
	},
};
