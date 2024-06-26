var products = [
    {
        name: "Philips",
        prdname: "HP702/06 Selfie Straightener",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2974141/2020/4/30/e79296fd-8478-4c29-a32b-b07d5e72ac6d1588240924600PhilipsWomenKerashineSilkProCareHairStraightenerHP830206Blac1.jpg",
        price: "Rs. 1152",
        strikeOffPrice: "Rs. 1599"
    },
    {
        name: "Lakme",
        prdname: "Eyeconic Kajal - Deep Black",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11629088/2020/4/7/eadecde2-3d27-46a3-8d44-3a67048317391586236305698-Lakme-Eyeconic-Kajal---Deep-Black-035-g-51586236305566-1.jpg",
        price: "Rs. 148",
        strikeOffPrice: "Rs. 297"
    },
    {
        name: "Indulekha",
        prdname: "Bringha Hair Oil 50 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2508147/2018/9/12/f92ce43a-7490-4c32-974c-723d90a759331536751917400-indulekha-Unisex-Hair-Oil-3311536751917391-1.jpg",
        price: "Rs. 234",
        strikeOffPrice: "Rs. 298"
    },
    {
        name: "Maybeline",
        prdname: "Waterproof Hypercurl Mascara",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1967182/2018/7/31/f8e75fd5-47f4-4cc6-946d-cc069773cffb1533030162531-Maybelline-Black-Hyper-Curl-Mascara-Waterproof-Mascara-4211533030162488-1.jpg",
        price: "Rs. 259",
        strikeOffPrice: "Rs. 419"
    },
    {
        name: "Parachute",
        prdname: "Set of 2 Coconut Hair Oils",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11805330/2021/9/23/2a0ce24b-d90d-49cc-94bb-79d40087f7c91632421533038-Parachute-Advansed-Aloe-Vera-Enriched-Coconut-Hair-Oil-250-m-1.jpg",
        price: "Rs. 127",
        strikeOffPrice: "Rs. 257"
    },
    {
        name: "Lotus Herbals",
        prdname: "Whiteglow Brightening Creme",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/57677/2020/10/10/90dae682-fcf2-4436-b291-954e3c40af0e1602269668338LotusHerbalsSustainableWhiteglowSkinWhiteningBrighteningCrem1.jpg",
        price: "Rs. 292",
        strikeOffPrice: "Rs. 489"
    },
    {
        name: "NOVA",
        prdname: "NHP8100 Silky Shine Hair Dryer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7030192/2021/11/8/c50a462d-d87e-4059-ae47-a53ed95404291636364709468-NOVA-NHP-8100-Silky-Shine-Hot--Cold-Foldable-Hair-Dryer---Bl-1.jpg",
        price: "Rs. 447",
        strikeOffPrice: "Rs. 746"
    },
    {
        name: "THE MAN COMPANY",
        prdname: "Men Black EDT 50 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11846244/2020/9/1/70d4fab7-d46a-40cb-9b88-45226e96fa821598976979286-THE-MAN-COMPANY-Men-Perfume-EDT-50-ml-7851598976978540-2.jpg",
        price: "Rs. 389",
        strikeOffPrice: "Rs. 564"
    },
    {
        name: "Pilgrim",
        prdname: "Advanced Hair Growth Serum",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15797468/2021/10/11/1e9c95f5-3318-4382-935d-bd1669b132df1633948161007Pilgrim1.jpg",
        price: "Rs. 807",
        strikeOffPrice: "Rs. 1237"
    },
    {
        name: "Phillips",
        prdname: "Skin-friendly Beard Trimmer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14487068/2021/10/11/6cf84321-97eb-42d2-b630-850be015aeb91633932455464-Philips-Blue-Skin-friendly-Beard-Trimmer---DuraPower-Technol-1.jpg",
        price: "Rs. 897",
        strikeOffPrice: "Rs. 1345"
    },
    {
        name: "Havells",
        prdname: "Hair Dryer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16040338/2021/11/9/dd670cf7-264d-42aa-85cc-05f6283d9da01636457972035Havells1.jpg",
        price: "Rs. 1667",
        strikeOffPrice: "Rs. 2009"
    },
    {
        name: "GUESS",
        prdname: "Women Dare EDT 100 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10893332/2020/3/5/4604e55e-1b56-40cd-98a6-457b87cc9a7e1583392219813-GUESS-Women-Dare-Eau-De-Toilette-100-ml-3621583392218890-1.jpg",
        price: "Rs. 2194",
        strikeOffPrice: "Rs. 2987"
    },
    {
        name: "JAGUAR",
        prdname: "Men Classic Black EDT 100 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/43113/2019/1/25/5394e5e4-2039-4a78-a76d-4fa4289dd96c1548408494036-JAGUAR-Men-Classic-Black-Eau-De-Toilette-100-ml-825154840849-1.jpg",
        price: "Rs. 1485",
        strikeOffPrice: "Rs. 1768"
    },
    {
        name: "SUGAR",
        prdname: "Set of 4 Mini Bold Lipstick",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11632898/2021/8/3/88ba89e5-cfd2-4f04-9cb6-0f5c970b9fd91627983100472SUGARSetof4SmudgeMeNotLiquidMiniBoldLipstick1.jpg",
        price: "Rs. 799",
        strikeOffPrice: "Rs. 999"
    },
    {
        name: "Maybelline",
        prdname: "Colossaal Bold Liner - Black",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9747207/2022/2/1/8bc5d4f2-5e50-4dee-94fe-2a959b5bc3731643695847339-Maybelline-New-York-Colossal-Bold-Liner---Black-225164369584-1.jpg",
        price: "Rs. 204",
        strikeOffPrice: "Rs. 299"
    },
    {
        name: "Colorbar",
        prdname: "Perfect Match Primer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/220738/2020/6/15/8b32f353-3189-4b82-9a6f-937a058eccff1592214516880ColorbarPerfectMatchPrimer30ml1.jpg",
        price: "Rs.552",
        strikeOffPrice: "Rs. 785"
    },
    {
        name: "Lotus Herbals",
        prdname: "Whiteglow Brightening Creme",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/57677/2020/10/10/90dae682-fcf2-4436-b291-954e3c40af0e1602269668338LotusHerbalsSustainableWhiteglowSkinWhiteningBrighteningCrem1.jpg",
        price: "Rs. 292",
        strikeOffPrice: "Rs. 365"
    },
    {
        name: "Calvin Klein",
        prdname: "Unisex One EDT 200 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1344092/2019/6/18/26d36e4c-ed5e-4871-b4a0-ebb8af4ed4d51560840934105-Calvin-Klein-Unisex-One-Eau-De-Toilette-Perfume-557156084093-1.jpg",
        price: "Rs. 4163",
        strikeOffPrice: "Rs. 4989"
    },
    {
        name: "Philips",
        prdname: "HP8199/46 Salon Dry Hair Dryer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9374997/2021/7/30/2613e26e-1c13-4054-8ad5-1841e8436a6b1627637166814-Philips-HP810046-SalonDry-ThermoProtect-1000W-Compact-Hair-D-1.jpg",
        price: "Rs. 787",
        strikeOffPrice: "Rs. 985"
    },
    {
        name: "NOVA",
        prdname: "Men NHT-1076 Cordless Trimmer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9548051/2021/11/8/ba0a240e-11c2-4442-8217-9cd00352325a1636364762901-Nova-Men-NHT-1076-Cordless-Trimmer---Black-3011636364762209-1.jpg",
        price: "Rs. 503",
        strikeOffPrice: "Rs. 798"
    },
    {
        name: "Denver",
        prdname: "Men Set of 2 Deodorant Sprays",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10339459/2019/8/23/15f72594-f448-4bb9-b4e1-42cc8dbf203b1566550537840-Denver-Black-Code-Deo-Combo-Pack-of-2-8361566550537593-1.jpg",
        price: "Rs. 246",
        strikeOffPrice: "Rs. 415"
    },
    {
        name: "Lotus Herbals",
        prdname: "Sustainable Safe Sun UV Screen",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/533235/2021/8/11/46a8a209-a66b-42c2-9888-b49ca5d05f851628670596800-Lotus-Herbals-Sustainable-Safe-Sun-UV-Screen-Matte-Gel-Sunsc-1.jpg",
        price: "Rs. 273",
        strikeOffPrice: "Rs. 397"
    },
    {
        name: "Renee",
        prdname: "Fab 5 in 1 Lipstick 7.5g",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14269676/2022/1/8/663f297a-05e9-4c3b-b418-3b421c730e6d1641647521427-Renee-Fab-5-5in1-Lipstick-75g-3881641647521045-1.jpg",
        price: "Rs. 570",
        strikeOffPrice: "Rs. 768"
    },
    {
        name: "Veet",
        prdname: "Women Electric Hair Trimmer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7187574/2018/8/25/309ef6ed-476a-49f5-a3d1-014b47df5cda1535188305888-Veet-Women-Pink--White-Sensitive-Touch-Expert-Electric-Hair-Trimmer-7711535188305505-1.jpg",
        price: "Rs. 1597",
        strikeOffPrice: "Rs. 1976"
    },
    {
        name: "Memaearth",
        prdname: "Sustainable Oil Shampoo 250 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11081544/2022/2/21/d1d3adb3-fc48-4ebb-b6fc-8ed26d96dbd31645444459549-Mamaearth-Sustainable-Onion-Hair-Fall-Control-Shampoo-250-ml-1.jpg",
        price: "Rs. 314",
        strikeOffPrice: "Rs. 496"
    },
    {
        name: "Neutrogena",
        prdname: "Ultra Sheer Sunblock 30 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6967600/2021/8/11/5931839a-2884-40e5-8414-a9250168fe231628671619468NeutrogenaUltraSheerDryTouchSunblockSPF5030ml1.jpg",
        price: "Rs. 237",
        strikeOffPrice: "Rs. 487"
    },
    {
        name: "Roadster",
        prdname: "Men By The Sea Body Spray",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7669600/2021/12/27/91a768fa-9a7b-4e32-817b-558ade9db0671640584829588-Roadster-Men-By-The-Sea-Body-Spray-150-ml-3571640584828982-1.jpg",
        price: "Rs. 164",
        strikeOffPrice: "Rs. 456"
    },
    {
        name: "Biotique",
        prdname: "Vit-C Brightening Moisturizer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12679484/2022/1/28/e7f1fceb-72d3-4527-a411-b48b0a601e261643362261026BiotiqueVitaminCCorrectingandBrighteningTreatmentFaceMoistur1.jpg",
        price: "Rs. 152",
        strikeOffPrice: "Rs. 219"
    },
    {
        name: "Lakme",
        prdname: "9 to 5 Complexion Care Cream",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12869418/2021/3/8/f2dfe369-71b6-458c-a24b-62753d2580c91615202495605-Lakme-Women-Face-Moisturisers-2841615202495189-1.jpg",
        price: "Rs. 261",
        strikeOffPrice: "Rs. 516"
    },
    {
        name: "Lakme",
        prdname: "Women Lightening Creme 50 g",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1254169/2019/12/2/4947de98-1a37-499d-952b-3c24f99428331575285541146-Lakme-Absolute-Women-Perfect-Radiance-Skin-Lightening-Day-Cr-1.jpg",
        price: "Rs. 224",
        strikeOffPrice: "Rs. 786"
    },
    {
        name: "Maybelline",
        prdname: "Fit Me Matte Foundation",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8119785/2019/5/24/0a506159-2108-44ee-b122-6b9b0b53112f1558674160552-Maybelline-New-York-Fit-Me-MattePoreless-Liquid-Foundation-T-1.jpg",
        price: "Rs. 248",
        strikeOffPrice: "Rs. 567"
    },
    {
        name: "FRSH",
        prdname: "1965 Pour Homme Eau De Parfum 100 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14886588/2021/7/27/eedb58b7-f75b-427f-b828-412524df9ced1627395873434-FRSH-By-Salman-Khan-1965-9351627395872939-1.jpg",
        price: "Rs. 682",
        strikeOffPrice: "Rs. 985"
    },
    {
        name: "wahl",
        prdname: "Wahl 08841-724 Trimmer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9351113/2019/6/21/f7079beb-0efb-425d-a0c0-f896f51357231561113552583-WAHL-Men-Silver-Toned-Beret-L-Ion-Cordless-Trimmer-08841-724-1.jpg",
        price: "Rs. 7219",
        strikeOffPrice: "Rs. 8889"
    },
    {
        name: "ELLE 18",
        prdname: "Super Black Kajal",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9352381/2020/7/22/a729594c-e0fc-4401-8290-94951014dd651595417285767PRADAAmberPourHommeEauDeToilette100mlBodyLotionNiveaWomenLip1.jpg",
        price: "Rs. 85",
        strikeOffPrice: "Rs. 101"
    },
    {
        name: "Minimalist",
        prdname: "Vitamin C Serum",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14173102/2022/1/28/2c1410e5-8dc8-46bd-8c02-b8e43b33c0fd1643364224869MinimalistVitaminC10FaceSerumforGlowingSkin30ml1.jpg",
        price: "Rs. 664",
        strikeOffPrice: "Rs. 854"
    },
    {
        name: "Denver",
        prdname: "Men Set of Imperial EDP & Deo",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9055331/2019/4/9/a300f11e-f7eb-4769-9950-8f262b16c9981554809707570-Denver-Men-Perfume-and-Body-Mist-851554809707251-1.jpg",
        price: "Rs. 575",
        strikeOffPrice: "Rs. 654"
    },
    {
        name: "Bath & Body Works",
        prdname: "A Thousand Wishes Mist 236 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13461022/2021/1/27/54d565d0-00ac-4dd7-bdf2-4a1e38132efd1611766793731AThousandWishesDiamondShimmerMist1.jpg",
        price: "Rs. 1699",
        strikeOffPrice: "Rs. 2459"
    },
    {
        name: "M.A.C",
        prdname: "24hr Kajal Eye Liner - Black",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14041454/2021/6/1/d267340a-2942-4ed9-bd79-d7b125ee07ec1622539009229-IN-EXTREME-DIMENSION-24HR-KAJAL-6201622539009105-1.jpg",
        price: "Rs. 657",
        strikeOffPrice: "Rs. 958"
    },
    {
        name: "Lakme",
        prdname: "Sun Expert Ultra Matte Compact",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11629078/2021/3/24/a6507938-a4e6-46c5-a908-ed80154a14661616574219694-Lakme-Sun-Expert-Ultra-Matte-PA-Compact-with-SPF-40-7g-13216-1.jpg",
        price: "Rs. 186",
        strikeOffPrice: "Rs. 258"
    },
    {
        name: "Lakme",
        prdname: "Set of 2 Eyeconic Kajal",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11629094/2020/7/9/d9cc4f27-9deb-46ca-821e-a37410cbcbd51594288324999LakmeSetof2EyeconicKajal-DeepBlack070g1.jpg",
        price: "Rs. 256",
        strikeOffPrice: "Rs. 399"
    },
    {
        name: "Plum",
        prdname: "Eye-Swear-By Matte Liner Black",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16581366/2021/12/22/9e208f19-fc16-44b6-a7f6-5d6bb15547231640159046711KajalandEyeliner1.jpg",
        price: "Rs. 356",
        strikeOffPrice: "Rs. 567"
    },
    {
        name: "Minimalist",
        prdname: "SPF 50 PA++++ Sunscreen",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15853718/2021/10/19/88d9b19b-c901-4460-98da-fd0e439302671634623568761SPF50PASunscreen1.jpg",
        price: "Rs. 379",
        strikeOffPrice: "Rs. 546"
    },
    {
        name: "Olay",
        prdname: "Natural White Skin Cream",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13509840/2021/4/13/79374dd3-2c1f-4657-bd68-cdc1c579f2e41618311067907-Olay-Women-Face-Moisturisers-8781618311067592-1.jpg",
        price: "Rs. 89",
        strikeOffPrice: "Rs. 137"
    },
    {
        name: "Neutriderm",
        prdname: "Vitamin E Moisturising Lotion",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13176342/2022/1/28/86cbe107-eec8-4d36-b2a7-01f2b77d56c11643363736450NeutridermVitaminEMoisturisingLotion125ml1.jpg",
        price: "Rs. 850",
        strikeOffPrice: "Rs. 978"
    },
    {
        name: "Essence",
        prdname: "False Lash Effect Mascara",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13072162/2020/11/25/1969bf57-283e-4922-af60-499f444731b91606322844492-Essence-Lash-Princess-False-Lash-Effect-Mascara-956160632284-1.jpg",
        price: "Rs. 296",
        strikeOffPrice: "Rs. 398"
    },
    {
        name: "Lakme",
        prdname: "Curling Mascara-Black",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/v1/images/style/properties/Lakme-Women-Eyeconic-Curling-Mascara_6daf8e9aa29f1dc976b83bf7c3f70fda_images.jpg",
        price: "Rs. 382",
        strikeOffPrice: "Rs. 476"
    },
    {
        name: "MayBelline",
        prdname: "Gel Eyeliner - Blackest Black",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1967184/2018/4/9/11523275170012-Maybelline-EYESTUDIO-Blackest-Black-Dramatic-Gel-Eyeliner-950-1301523275169972-1.jpg",
        price: "Rs. 390",
        strikeOffPrice: "Rs. 438"
    },
    {
        name: "LUVYH",
        prdname: "Set of 2 Papaya Face Cream",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16739852/2022/1/8/1bf8371b-c637-4f5e-93e4-0d9ca363c3471641632463110PapayaFaceMassageCream-200gPackof21.jpg",
        price: "Rs. 508",
        strikeOffPrice: "Rs. 608"
    },
    {
        name: "THE MAN COMPANY",
        prdname: "Men Black EDT 50 ml",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11846244/2020/9/1/70d4fab7-d46a-40cb-9b88-45226e96fa821598976979286-THE-MAN-COMPANY-Men-Perfume-EDT-50-ml-7851598976978540-2.jpg",
        price: "Rs. 389",
        strikeOffPrice: "Rs. 452"
    },
    {
        name: "FACES CANADA",
        prdname: "Stay Matte Compact - Natural",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10924310/2021/2/15/5778c926-2711-4ecf-9708-b08bbc157dcd1613370606696-FACES-CANADA-Weightless-SPF-20-Stay-Matte-Compact---Natural--1.jpg",
        price: "Rs. 169",
        strikeOffPrice: "Rs. 214"
    },
    {
        name: "JAGUAR",
        prdname: "Men Classic Black Deodorant",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1711647/2018/12/1/63bae53c-97d9-4f93-addb-89187230d5851543643200798-JAGUAR-Men-Classic-Black-Deodorant-150-ml-3501543643200264-1.jpg",
        price: "Rs. 374",
        strikeOffPrice: "Rs. 399"
    },
    {
        name: "FACES CANADA",
        prdname: "Ultime Pro Makeup Fixer",
        imgage: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2421530/2021/12/16/67b3c114-2968-4875-92cd-29568edc700b1639677243561FACESCANADAUltimeProMakeupFixer1.jpg",
        price: "Rs. 486",
        strikeOffPrice: "Rs. 512"
    }
]


products.map(function (elem, index, array) {
    var div = document.createElement("div");
    //   div.style.border = "1px solid red";
    var name = document.createElement("h4");
    name.innerText = elem.name;

    var prdName = document.createElement("p");
    prdName.innerText = elem.prdname;

    strikeOff = document.createElement("p");
    strikeOff.innerText = elem.strikeOffPrice;
    strikeOff.style.textDecoration = "line-through";

    var price = document.createElement("h4");
    price.innerText = elem.price;

    var innerDiv = document.createElement("div");
    innerDiv.append(price, strikeOff);
    innerDiv.setAttribute("class", "priceDiv")

    var image = document.createElement("img");
    image.setAttribute("src", elem.imgage);

    var cart = document.createElement("button");
    cart.innerText = "Wishlist";
    cart.style.textAlign = "center"
    cart.setAttribute("class", "wishlist-button")
    cart.addEventListener("click", function () {
        addToCart(elem);
    })

    div.append(image, name, prdName, innerDiv, cart);
    document.querySelector("#products").append(div);
})