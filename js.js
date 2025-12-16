        // --- STATE MANAGEMENT ---
        let state = {
            currentView: 'home', 
            isStoreOpen: false,
            heroSlideIndex: 0
        };

        // --- DATA ---
        const heroBanners = [
    {
        id: 1,
        src: "TGA.png",
        alt: "Main Banner 1",
        link: "https://thegameawards.com/winners"
    },
    {
        id: 2,
        src: "Editor Choice.png",
        alt: "Main Banner 2",
        link: "https://store.playstation.com/en-id/category/f0e0aa50-998f-4fc7-881b-064f10f0c2cc/1"
    }
];

        const freeGames = [
            { id: 1, title: "Hogwarts Legacy", src: "Hogwarts Legacy.png", link: "https://store.epicgames.com/en-US/p/hogwarts-legacy" },
            { id: 2, title: "Black Desert", src: "Black Desert.png", link: "https://store.steampowered.com/app/582660/Black_Desert/" }
        ];

        const featuredDiscounts = [
            { id: 1, src: "Battlefield 6 Sale.png", title: "BatleField 6", link: "https://store.epicgames.com/en-US/p/battlefield-6" },
            { id: 2, src: "FC26 Sale.png", title: "EA FC26", link: "https://store.epicgames.com/en-US/p/ea-sports-fc-26" },
            { id: 3, src: "Clair Obscur Sale.png", title: "Clair Obscur", link: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/" },
            { id: 4, src: "Monster Hunter Sale.png", title: "Monster Hunter Wilds", link: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/" }
        ];

        const newReleases = [
            { id: 1, src: "Silent Hill F.png", title: "Silent Hill f",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/JP0101-PPSA21159_00-MAINGAME00000000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2947440/SILENT_HILL_f/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/silent-hill-f-714aed" },
                        { label: "GOG", url: "https://www.gog.com/en/game/silent_hill_f" }
                        ]},
            { id: 2, src: "Battlefield 6.png", title: "Battlefield 6",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP0006-PPSA19534_00-SANTIAGOSTANDARD" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2807960/Battlefield_6/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/battlefield-6" }
                        ]},
            { id: 3, src: "Silksong.png", title: "Hollow Knight Silksong",
                popupLinks:[
                        { label: "PlayStation 4&5", url: "https://store.playstation.com/en-id/product/EP1805-PPSA12544_00-HKSILKSONGPS5000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/" },
                        { label: "GOG", url: "https://www.gog.com/en/game/hollow_knight_silksong" }
                        ]},
            { id: 4, src: "Clair Obscur.png", title: "Expedition 33",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/EP7579-PPSA17599_00-EXP33000000PS5EU" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/expedition-33-b3240d" },
                        { label: "GOG", url: "https://www.gog.com/en/game/clair_obscur_expedition_33" },
                        ]},
        ];
        const trendingGames = [
            { id: 1, src: "Donkey Kong.png", title: "Donkey Kong",
                popupLinks:[
                        { label: "Nintendo Switch 2", url: "https://www.nintendo.com/us/store/products/donkey-kong-bananza-switch-2/" },
                        ]},
            { id: 2, src: "Sonic Racing.png", title: "Sonic",
                popupLinks:[
                        { label: "PlayStation 4&5", url: "https://store.playstation.com/en-id/product/JP0177-PPSA08804_00-SONICRACINGCW000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2486820/Sonic_Racing_CrossWorlds/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/sonic-racing-crossworlds" }
                        ]},
            { id: 3, src: "Death Stranding.png", title: "Death Stranding 2",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/JP9000-PPSA02015_00-DS2OTB0000000001" }
                        ]},
            { id: 4, src: "Ghost of Yotei.png", title: "Ghost of Yotei",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP9000-PPSA26344_00-GHOST2SHIP000000" }
                        ]},
        ];
        const categories = [
            "Action & Shooter", "Fighting", "Horror", "Simulation",
            "Story", "Sports", "Adventure", "Racing"
        ];

        const storeMenuData = {
            categoriesCol1: ["Action & Shooter", "Fighting", "Story", "Sports"],
            categoriesCol2: ["Horror", "Simulation", "Adventure", "Racing"],
            stores: ["Steam", "Epic Games", "PS Store", "GOG.com"]
        };

        // Game Lists per Category
        const gamesData = {
            "action-shooter": [
                { id: 1, title: "Valorant", src: "Valorant.png",
                    popupLinks:[
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/valorant" }
                        ]},
                { id: 2, title: "Elden Ring", src: "Nightreign.png",
                    popupLinks:[
                        { label: "PlayStation 4&5", url: "https://store.playstation.com/en-id/product/EP0700-PPSA25381_00-ERSL000000000000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2622380/ELDEN_RING_NIGHTREIGN/" }
                        ]},
                { id: 3, src: "Ghost of Yotei.png", title: "Ghost of Yotei",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP9000-PPSA26344_00-GHOST2SHIP000000" }
                        ]},
                { id: 4, title: "Delta Force", src: "Delta Force.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP5104-PPSA28884_00-DELTAFORCEASIA00" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2507950/Delta_Force/" }
                        ]},
                { id: 5, title: "Wuthering Waves", src: "Wuthering Waves.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/EB1238-PPSA24686_00-0625573803756286" },
                        { label: "Steam", url: "https://store.steampowered.com/app/3513350/Wuthering_Waves/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/wuthering-waves-76ebc5" }
                        ]},
                { id: 6, title: "Cyberpunk 2077", src: "Cyberpunk 2077.png",
                    popupLinks:[
                        { label: "PlayStation 4&5", url: "https://store.playstation.com/en-id/product/HP4497-PPSA04028_00-00000000000000N5" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/cyberpunk-2077" },
                        { label: "GOG", url: "https://www.gog.com/en/game/cyberpunk_2077" }
                        ]},
                { id: 7, title: "Tekken 8", src: "Tekken 8.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/JP0700-PPSA10592_00-TEKKEN8000000000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1778820/TEKKEN_8/" }
                        ]},
                { id: 8, title: "Apex Legends", src: "Apex Legends.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP0006-PPSA04873_00-APEXLEGENDRSPWN1" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1172470/Apex_Legends/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/apex-legends-006cde" }
                        ]},
                { id: 9, title: "Palworld", src: "Palworld.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP6360-PPSA23126_00-0112788005082769" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1623730/Palworld/" }
                        ]},
                { id: 10, title: "Honkai Star Rail", src: "HSR.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/EP7476-PPSA08458_00-OSSIEESTARRAIL00" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/honkai-star-rail" }
                        ]},
                { id: 11, title: "Stellar Blade", src: "Stellar Blade.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/HP9000-PPSA13198_00-STELLARBLADE0000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/3489700/Stellar_Blade/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/stellar-blade-fa21c3" }
                        ]},
                { id: 12, src: "Battlefield 6.png", title: "Battlefield 6",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP0006-PPSA19534_00-SANTIAGOSTANDARD" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2807960/Battlefield_6/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/battlefield-6" }
                        ]},
            ],
            "fighting": [
                { id: 1, title: "Tekken 8", src: "Tekken 8.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/JP0700-PPSA10592_00-TEKKEN8000000000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1778820/TEKKEN_8/" }
                        ]},
                { id: 2, title: "Street Fighter 6", src: "Street Fighter.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, title: "Mortal Kombat 1", src: "Mortal Kombat.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 4, title: "Guilty Gear Strive", src: "Guilty Gear.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "Super Smash Bros Ultimate", src: "Super Smash Bros.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 6, title: "Dragon Ball FighterZ", src: "Dragon Ball FighterZ.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 7, title: "MultiVersus", src: "Multiversus.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, title: "Injustice 2.", src: "Injustice.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
            ],
            "horror": [
                { id: 1, src: "Silent Hill F.png", title: "Silent Hill f",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/JP0101-PPSA21159_00-MAINGAME00000000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2947440/SILENT_HILL_f/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/silent-hill-f-714aed" },
                        { label: "GOG", url: "https://www.gog.com/en/game/silent_hill_f" }
                        ]},
                { id: 2, title: "MiSide", src: "Miside.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, title: "Resident Evil 4", src: "Resident Evil.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 4, title: "Alan Wake II", src: "Alan Wake.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "Phasmophobia", src: "Phasmaphobia.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 6, title: "Lethal Company", src: "Lethal Company.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 7, title: "Madison", src: "Madison.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, title: "Little Nightmares III", src: "Little Nightmares.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
            ],
            "simulation": [
                { id: 1, title: "Microsoft Flight Simulator 2024", src: "MFS.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 2, title: "Cities Skylines II", src: "Cities Skylines.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, title: "Farming Simulator 25", src: "Farming Simulator.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 4, title: "Euro Truck Simulator 2", src: "Euro Truck Simulator.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "Stardew Valley", src: "Stardew Valley.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 6, title: "PC Building Simulator 2", src: "Pc Building Simulator.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 7, title: "inZOI", src: "InZOI.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, title: "Goat Simulator 3", src: "Goat Simulator.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
            ],
            "story": [
                { id: 1, src: "Silent Hill F.png", title: "Silent Hill f",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/JP0101-PPSA21159_00-MAINGAME00000000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2947440/SILENT_HILL_f/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/silent-hill-f-714aed" },
                        { label: "GOG", url: "https://www.gog.com/en/game/silent_hill_f" }
                        ]},
                { id: 2, title: "Miside", src: "Miside.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, src: "Ghost of Yotei.png", title: "Ghost of Yotei",
                popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/UP9000-PPSA26344_00-GHOST2SHIP000000" }
                        ]},
                { id: 4, title: "Omori", src: "Omori.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "Cyberpunk 2077", src: "Cyberpunk 2077.png",
                    popupLinks:[
                        { label: "PlayStation 4&5", url: "https://store.playstation.com/en-id/product/HP4497-PPSA04028_00-00000000000000N5" },
                        { label: "Steam", url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/cyberpunk-2077" },
                        { label: "GOG", url: "https://www.gog.com/en/game/cyberpunk_2077" }
                        ]},
                { id: 6, title: "Honkai Star Rail", src: "HSR.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "https://store.playstation.com/en-id/product/EP7476-PPSA08458_00-OSSIEESTARRAIL00" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/honkai-star-rail" }
                        ]},
                { id: 7, title: "A Space for the Unbound", src: "A Space for the Unbound.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, title: "Undertale", src: "Undertale.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
            ],
            "sports": [
                { id: 1, title: "Forza Horizon", src: "Forza Horizon.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 2, title: "EAFC", src: "FC26.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, title: "NBA2K", src: "NBA2K.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 4, title: "F125", src: "F1 25.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "TopSpin", src: "TopSpin.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 6, title: "Assetto Corsa", src: "Assetto Corsa.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 7, title: "Gran Turismo 7", src: "Gran Turismo.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, title: "MotoGP", src: "MotoGP.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
            ],
            "adventure": [
                { id: 1, title: "Minecraft Dungeons", src: "Minecraft Dungeons.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 2, title: "Horizon Zero Dawn", src: "Horizon Zero Dawn.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, title: "The Witcher 3", src: "The Witcher.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 4, title: "Uncharted", src: "Uncharted.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "FarCry 6", src: "Far Cry 6.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 6, title: "Shadow of the Tomb Raider", src: "Shadow of the Tomb Raider.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 7, title: "Red Dead Redemption 2", src: "Red Dead Redemption.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, title: "Assassin's Creed Shadows", src: "Assassin's Creed Shadows.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
            ],
            "racing": [
                { id: 1, title: "Forza Horizon 5", src: "Forza Horizon.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 2, title: "F1 25", src: "F1 25.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 3, title: "Assetto Corsa", src: "Assetto Corsa.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 4, title: "Gran Turismo 7", src: "Gran Turismo.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 5, title: "MotoGP 25", src: "MotoGP.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 6, title: "The Crew 2", src: "The Crew.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 7, title: "WRC 10", src: "WRC.png",
                    popupLinks:[
                        { label: "PlayStation 5", url: "" },
                        { label: "Steam", url: "" },
                        { label: "Epic Games", url: "" }
                        ]},
                { id: 8, src: "Sonic Racing.png", title: "Sonic",
                popupLinks:[
                        { label: "PlayStation 4&5", url: "https://store.playstation.com/en-id/product/JP0177-PPSA08804_00-SONICRACINGCW000" },
                        { label: "Steam", url: "https://store.steampowered.com/app/2486820/Sonic_Racing_CrossWorlds/" },
                        { label: "Epic Games", url: "https://store.epicgames.com/en-US/p/sonic-racing-crossworlds" }
                        ]},
            ]
        };

        const newsData = [
            {
                id: 1,
                title: "Riot Games Welcomes Full Sense to VCT Pacific for 2026",
                author: "VALORANT Esports | Schedule",
                time: "22h",
                src: "VCT.png",
                link: "https://valorantesports.com/en-SG/news/riot-games-welcomes-full-sense-to-vct-pacific-for-2026"
            },
            {
                id: 2,
                title: "Cost Per Frame: Best Value Graphics Cards Right Now",
                author: "TechSpot",
                time: "1w",
                src: "GPU.png",
                link: "https://www.techspot.com/article/3061-cost-per-frame-gpu/"
            },
            {
                id: 3,
                title: "DDR5 vs. DDR4 Gaming Performance Revisited",
                author: "TechSpot",
                time: "3d",
                src: "DDR4v5.png",
                link: "https://www.techspot.com/review/3059-ddr5-vs-ddr4-gaming/"
            },
            {
                id: 4,
                title: "PC Gamers Can Grab 14 Free Games This December, AAAs Included",
                author: "GAMINGBible",
                time: "3d",
                src: "Free AAA.png",
                link: "https://www.gamingbible.com/news/14-free-pc-games-december-976203-20251205"
            },
            {
                id: 5,
                title: "Grab a 32GB DDR5 memory kit at the cheapest available price before it disappears",
                author: "Tom's Hardware",
                time: "17h",
                src: "RAM Deal.png",
                link: "https://www.tomshardware.com/pc-components/ddr5/grab-a-32gb-ddr5-memory-kit-at-the-cheapest-available-price-before-it-disappears-crucial-ddr5-6000-pro-overclocking-ram-available-for-usd273-99"
            },
            {
                id: 6,
                title: "Tekken Development Chief Katsuhiro Harada Announces Bandai Namco Exit After 30 Years",
                author: "IGN",
                time: "21h",
                src: "Bandai.png",
                link: "https://www.ign.com/articles/tekken-development-chief-katsuhiro-harada-announces-bandai-namco-exit-after-30-years"
            }
        ];

        const forumData = [
            {
                id: 1,
                title: "What is the best video game of all time for you, and why?",
                link: "https://qr.ae/pCOpas"
            },
            {
                id: 2,
                title: "Do rich people play video games?",
                link: "https://qr.ae/pCOpaY"
            },
            {
                id: 3,
                title: "Are video games art? Why or why not? What are good examples?",
                link: "https://qr.ae/pCOpZ2"
            },
            {
                id: 4,
                title: "How do I become a professional gamer?",
                link: "https://qr.ae/pCOpZu"
            },
            {
                id: 5,
                title: "In Assassin's Creed Shadows, do you think Ubisoft intentionally ma...",
                link: "https://qr.ae/pCgxbO"
            },
            {
                id: 6,
                title: "Have you ever played games that were low budget or less expensi...",
                link: "https://qr.ae/pCgxbQ"
            },
            {
                id: 7,
                title: "What video game has the most creative game mechanics?",
                link: "https://qr.ae/pCgxOt"
            },
            {
                id: 8,
                title: "What are the strangest and most unique video game Easter eggs...",
                link: "https://qr.ae/pCgxWm"
            },
            {
                id: 9,
                title: "Is an Intel i7 third generation still good to play modern games?",
                link: "https://qr.ae/pCgx9e"
            }
        ];


        // --- HELPER FUNCTIONS ---

        function generateCard(game, withPopup = true) {
    const hasPopup =
        withPopup &&
        Array.isArray(game.popupLinks) &&
        game.popupLinks.length > 0;

    const popupId = hasPopup
        ? `popup-${game.id}-${Math.random().toString(36).slice(2,6)}`
        : null;

    return `
        <div class="w-[245px] h-[390px] flex-shrink-0 overflow-visible">
            <div
                class="relative w-full h-full transition-transform duration-300 transform-gpu hover:scale-[1.05] hover:z-20
                       ${hasPopup ? 'cursor-pointer' : ''}"
                ${hasPopup ? `onclick="handleGameCardClick(event, '${popupId}')"` : ''}
            >
                ${
                    game.src
                        ? `<img src="${game.src}" alt="${game.title}" class="w-full h-full object-contain" />`
                        : `<div class="img-placeholder">${game.title || 'GAME COVER'}</div>`
                }

                ${
                    hasPopup
                        ? `
                        <div
                            id="${popupId}"
                            class="game-popup"
                            onclick="event.stopPropagation()"
                        >
                            ${game.popupLinks.map(link => `
                                <a href="${link.url}">
                                    ${link.label}
                                </a>
                            `).join('')}
                        </div>
                        `
                        : ''
                }
            </div>
        </div>
    `;
}





        // --- RENDER FUNCTIONS (VIEWS) ---

        function renderNavbar() {
            isStoreAnimating = false
            const isStoreActive = state.isStoreOpen || ['action-shooter', 'fighting', 'horror', 'simulation', 'story', 'sports', 'adventure', 'racing'].includes(state.currentView);
            
            const dropdown = state.isStoreOpen ? `
                <div
                  id="store-dropdown"
                  class="absolute top-[60px] left-0 w-full bg-white text-black shadow-xl border-t border-gray-100 py-8 z-40 store-dropdown"
                >
                  <div class="max-w-[1100px] mx-auto px-4 flex justify-center gap-24">
                    <div class="flex gap-16">
                      <div>
                        <h3 class="font-bold text-lg mb-4 font-league">Categories</h3>
                        <ul class="space-y-3 text-sm font-medium text-gray-700">
                          ${storeMenuData.categoriesCol1.map(cat => `
                            <li><button onclick="navigateToCategory('${cat}')" class="hover:text-[#1832a3] hover:underline transition text-left">${cat}</button></li>
                          `).join('')}
                        </ul>
                      </div>
                      <div class="pt-10">
                         <ul class="space-y-3 text-sm font-medium text-gray-700">
                          ${storeMenuData.categoriesCol2.map(cat => `
                            <li><button onclick="navigateToCategory('${cat}')" class="hover:text-[#1832a3] hover:underline transition text-left">${cat}</button></li>
                          `).join('')}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 class="font-bold text-lg mb-4 font-league">Stores</h3>
                      <ul class="space-y-3 text-sm font-medium text-gray-700">
                        ${storeMenuData.stores.map(store => `
                          <li><a href="#" class="hover:text-[#1832a3] hover:underline transition">${store}</a></li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                </div>
            ` : '';

            const html = `
                <nav class="bg-[#1832a3] text-white h-[60px] shadow-md relative">
                    <div class="w-full px-4 md:px-8 h-full flex items-center justify-between relative bg-[#1832a3] z-50">
                        <!-- Logo -->
                        <div class="flex items-center cursor-pointer" onclick="navigate('home')">
                            <h1 class="text-2xl font-[900] tracking-wider uppercase">IMBORED.NET</h1>
                        </div>

                        <!-- Center Menu -->
                        <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-24 text-sm font-medium">
                            <button
                                data-store-trigger
                                onclick="handleStoreClick(event)"
                                class="transition focus:outline-none ${isStoreActive ? 'font-bold opacity-100' : 'opacity-80 hover:opacity-100'}"
                            >
                                Store
                            </button>
                            <button onclick="navigate('news')" class="transition focus:outline-none ${state.currentView === 'news' ? 'font-bold opacity-100' : 'opacity-80 hover:opacity-100'}">
                                News
                            </button>
                            <button onclick="navigate('forum')" class="transition focus:outline-none ${state.currentView === 'forum' ? 'font-bold opacity-100' : 'opacity-80 hover:opacity-100'}">
                                Forum
                            </button>
                        </div>

                        <!-- Right Buttons -->
                        <div class="flex items-center gap-3">
                            ${isLoggedIn() ? `
                                <button onclick="navigate('profile')" class="w-9 h-9 rounded-full overflow-hidden border border-white/50">
                                    <img src="Profile Picture.png" alt="Profile" class="w-full h-full object-cover" />
                                </button>
                            ` : `
                                <button onclick="navigate('signup')" class="hidden md:flex items-center justify-center w-24 h-9 border-[1.5px] border-white text-xs font-bold uppercase">
                                    Sign Up
                                </button>
                                <button onclick="navigate('login')" class="flex items-center justify-center w-24 h-9 bg-white text-[#1832a3] text-xs font-bold uppercase">
                                    Login
                                </button>
                            `}
                        </div>
                    </div>
                    ${dropdown}
                </nav>
            `;
            document.getElementById('navbar-root').innerHTML = html;
        }

        function renderFooter() {
            const html = `
                <footer class="bg-[#1832a3] text-white py-10">
                    <div class="w-full px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <h2 class="text-2xl font-[900] tracking-wider uppercase font-league">IMBORED.NET</h2>
                        <div class="text-center md:text-right text-xs text-blue-200 leading-relaxed">
                            <p class="font-[600]">+62 882 1246 0316</p>
                            <p class="underline hover:text-white cursor-pointer">contact@imbored.net</p>
                        </div>
                    </div>
                </footer>
            `;
            document.getElementById('footer-root').innerHTML = html;
        }

        function renderHero() {
            const currentBanner = heroBanners[state.heroSlideIndex];
            const content = currentBanner.src ? 
                `<img src="${currentBanner.src}" alt="${currentBanner.alt}" class="w-full h-full object-cover transition-opacity duration-500" />` :
                `<div class="img-placeholder bg-gradient-to-r from-[#3a0000] via-[#8b0000] to-[#3a0000] text-white flex flex-col items-center justify-center h-full border-none">
                    <span class="text-3xl font-bold mb-2 font-league">BANNER ${state.heroSlideIndex + 1}</span>
                    <span class="text-sm opacity-75 font-poppins">Place your full banner image here</span>
                </div>`;

            return `
                <div class="relative w-full h-[300px] md:h-[380px] bg-black group overflow-hidden">
                    <div id="hero-container" class="w-full h-full relative">
    <a href="${currentBanner.link || '#'}" class="block w-full h-full cursor-pointer">
        ${content}
    </a>
                        <div class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
                    </div>
                    <button onclick="changeSlide(-1)" class="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition opacity-70 hover:opacity-100 z-10 drop-shadow-lg">
                        <i data-lucide="chevron-left" class="w-14 h-14" stroke-width="1.5"></i>
                    </button>
                    <button onclick="changeSlide(1)" class="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 text-white hover:scale-110 transition opacity-70 hover:opacity-100 z-10 drop-shadow-lg">
                        <i data-lucide="chevron-right" class="w-14 h-14" stroke-width="1.5"></i>
                    </button>
                    <div
    id="hero-dots"
    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20"
>

                        ${heroBanners.map((_, idx) => `
                            <button onclick="setSlide(${idx})" class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${state.heroSlideIndex === idx ? "bg-[#1832a3] scale-125 ring-2 ring-white/50" : "bg-white/50 hover:bg-white"}"></button>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function renderFreeGames() {
            return `
                <section class="bg-[#1832a3] text-white py-10">
                    <div class="max-w-[1100px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 justify-between">
                        <div class="flex flex-col gap-6 w-full lg:w-auto">
                            <h2 class="text-2xl font-[800] uppercase flex items-center gap-2 mb-0 font-league tracking-wide">FREE GAMES</h2>
                            <div class="flex flex-wrap gap-6 justify-center lg:justify-start">
                                ${freeGames.map(game => `
    <a
        href="${game.link || '#'}"
        class="w-[245px] h-[390px] overflow-visible block"
        target="_blank"
        rel="noopener noreferrer"
    >
        <div class="relative w-full h-full transition-transform duration-300 transform-gpu hover:scale-[1.05] hover:z-20">
            ${
                game.src
                    ? `<img src="${game.src}" class="w-full h-full object-contain" />`
                    : `<div class="img-placeholder">${game.title}</div>`
            }
        </div>
    </a>
`).join('')}
                            </div>
                        </div>
                        <div class="flex flex-col items-center lg:items-end justify-center text-center lg:text-right pt-4 lg:pt-0">
                            <h3 class="text-3xl md:text-[40px] font-[800] leading-[1.1] max-w-sm font-league uppercase">CLAIM BEFORE <br/> THE OFFER ENDS!</h3>
                            <button class="mt-6 bg-[#1832a3] border border-white/40 px-6 py-3 text-xs font-[700] uppercase tracking-wider hover:bg-white hover:text-[#1832a3] transition">View All Offers</button>
                        </div>
                    </div>
                </section>
            `;
        }

        // --- SPECIFIC VIEWS ---

        function renderHome() {
            return `
                ${renderHero()}
                ${renderFreeGames()}
                <div class="max-w-[1100px] mx-auto px-4 py-8 space-y-12">
                    <section>
                        <h2 class="text-2xl font-[800] uppercase text-black mb-5 font-league tracking-tight">Featured Discounts</h2>
                        <div class="flex flex-wrap justify-center gap-6 overflow-visible">
                            ${featuredDiscounts.map(game => `
    <a
        href="${game.link || '#'}"
        class="block"
        target="_blank"
        rel="noopener noreferrer"
    >
        ${generateCard(game, false)}
    </a>
`).join('')}

                        </div>
                    </section>
                    <section>
                        <h2 class="text-2xl font-[800] uppercase text-black mb-5 font-league tracking-tight">New Releases</h2>
                        <div class="flex flex-wrap justify-center gap-6 overflow-visible">
                            ${newReleases.map(game => generateCard(game)).join('')}
                        </div>
                    </section>
                    <section>
                        <h2 class="text-2xl font-[800] uppercase text-black mb-5 font-league tracking-tight">Trending</h2>
                        <div class="flex flex-wrap justify-center gap-6 overflow-visible">
                            ${trendingGames.map(game => generateCard(game)).join('')}
                        </div>
                    </section>
                    <section class="mb-8">
                        <h2 class="text-2xl font-[800] uppercase text-black mb-5 font-league tracking-tight">Categories</h2>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            ${categories.map(cat => `
                                <button onclick="navigateToCategory('${cat}')" class="bg-[#2442af] hover:bg-[#1c3494] text-white h-[80px] rounded-[4px] shadow-sm font-[600] text-[16px] md:text-[18px] transition duration-200 flex items-center justify-center font-league tracking-wide">
                                    ${cat}
                                </button>
                            `).join('')}
                        </div>
                    </section>
                </div>
            `;
        }

        function renderCategoryView(slug, title) {
            const games = gamesData[slug] || [];
            return `
                <div class="max-w-[1100px] mx-auto px-4 py-8 mb-12 min-h-screen">
                    <h1 class="text-4xl font-[900] uppercase text-black mb-8 font-league tracking-tight">${title}</h1>
                    <div class="flex flex-wrap justify-center gap-6 overflow-visible">
                        ${games.map(game => generateCard(game)).join('')}
                    </div>
                </div>
            `;
        }

        function renderNews() {
    return `
        <div class="max-w-[1100px] mx-auto px-4 py-8 mb-12 min-h-screen">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                ${newsData.map(news => `
                    <a
                        href="${news.link || '#'}"
                        class="flex flex-col gap-3 group cursor-pointer no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="w-full">
                            <div class="relative w-full aspect-video bg-gray-200 rounded-xl shadow-sm overflow-hidden group-hover:-translate-y-1 transition-transform">
                                <div class="absolute inset-0 transition-all duration-300 ease-out group-hover:brightness-105 group-hover:shadow-2xl">
                                    <img
                                        src="${news.src}"
                                        alt="${news.title}"
                                        class="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-[18px] font-[600] leading-tight text-gray-900 group-hover:text-[#1832a3] transition mb-2 font-poppins">
                                ${news.title}
                            </h3>
                            <div class="flex justify-between items-center text-xs text-gray-500 font-medium">
                                <span>${news.author} · ${news.time}</span>
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}
        function renderForum() {
            return `
                <div class="max-w-[1100px] mx-auto px-4 py-8 mb-12 min-h-screen space-y-4">
                    ${forumData.map(item => `
                        <a href="${item.link}" class="flex items-start gap-4 group no-underline">
                            <div class="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                <i data-lucide="user" class="text-gray-400 w-6 h-6"></i>
                            </div>
                            <div class="relative flex-grow bg-[#1832a3] rounded-sm p-4 forum-bubble transition transform group-hover:-translate-y-1 group-hover:shadow-lg">
                                <span class="block text-[10px] text-white/70 font-medium mb-1">
                                    Anonymous
                                </span>
                                <h3 class="text-white text-lg font-bold font-poppins leading-tight">
                                    ${item.title}
                                </h3>
                            </div>
                        </a>
                    `).join('')}
                </div>
            `;
        }

        function renderLogin() {
            return `
                <div class="flex justify-center items-center min-h-[calc(100vh-60px)] bg-white py-12">
                    <div class="bg-[#1832a3] w-full max-w-[450px] p-8 md:p-12 shadow-2xl">
                        <h2 class="text-white text-3xl font-[900] text-center mb-8 font-league uppercase">
                            IMBORED.NET
                        </h2>

                        <form class="space-y-4" onsubmit="event.preventDefault(); handleLogin();">
                            <div>
                                <label class="text-white text-sm">Email</label>
                                <input id="login-email" type="email" class="w-full bg-[#2a46c0] border border-white/50 text-white px-4 py-2.5 text-sm" />
                            </div>

                            <div>
                                <label class="text-white text-sm block mb-1">Password</label>
                                <div class="relative">
                                    <input
                                        id="login-password"
                                        type="password"
                                        class="w-full bg-[#2a46c0] border border-white/50 text-white px-4 py-2.5 text-sm pr-12"
                                    />
                                    <span class="password-toggle" onclick="togglePassword('login-password', this)">
                                        show
                                    </span>
                                </div>
                            </div>
                            <button type="submit" class="w-full bg-white text-[#1832a3] font-bold py-3 mt-6 text-lg">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            `;
        }


        function renderSignUp() {
            return `
                <div class="flex justify-center items-center min-h-[calc(100vh-60px)] bg-white py-12">
                    <div class="bg-[#1832a3] w-full max-w-[450px] p-8 md:p-12 shadow-2xl">
                        <h2 onclick="navigate('home')" class="text-white text-3xl font-[900] text-center mb-8 font-league uppercase cursor-pointer">
                            IMBORED.NET
                        </h2>

                        <form class="space-y-4" oninput="validateSignUpForm()">
                            <div>
                                <label class="text-white text-sm">Username</label>
                                <input id="su-username" type="text" class="w-full bg-[#2a46c0] border border-white/50 text-white px-4 py-2.5 text-sm" />
                            </div>

                            <div>
                                <label class="text-white text-sm">Email</label>
                                <input id="su-email" type="email" class="w-full bg-[#2a46c0] border border-white/50 text-white px-4 py-2.5 text-sm" />
                            </div>

                            <div>
                                <label class="text-white text-sm block mb-1">Password</label>
                                <div class="relative">
                                    <input
                                        id="su-password"
                                        type="password"
                                        class="w-full bg-[#2a46c0] border border-white/50 text-white px-4 py-2.5 text-sm pr-12"
                                    />
                                    <span class="password-toggle" onclick="togglePassword('su-password', this)">
                                        show
                                    </span>
                                </div>
                            </div>

                            <div>
                                <label class="text-white text-sm block mb-1">Confirm Password</label>
                                <div class="relative">
                                    <input
                                        id="su-confirm"
                                        type="password"
                                        class="w-full bg-[#2a46c0] border border-white/50 text-white px-4 py-2.5 text-sm pr-12"
                                    />
                                    <span class="password-toggle" onclick="togglePassword('su-confirm', this)">
                                        show
                                    </span>
                                </div>
                            </div>
                            <button
                                id="signup-btn"
                                type="button"
                                disabled
                                onclick="handleSignUp()"
                                class="w-full bg-white text-[#1832a3] font-bold py-3 mt-6 text-lg opacity-50 cursor-not-allowed transition"
                            >
                                Sign Up
                            </button>
                        </form>

                        <p class="text-white text-xs text-center mt-6">
                            Already have an account?
                            <span onclick="navigate('login')" class="font-bold cursor-pointer hover:underline">Login here</span>
                        </p>
                    </div>
                </div>
            `;
        }
        function renderProfile() {
            const user = JSON.parse(localStorage.getItem('imbored_user')) || {};
            return `
                <div class="max-w-[1100px] mx-auto px-4 py-12">
                    <div class="bg-[#1832a3] text-white p-10 flex gap-10 items-center">
                <!-- Avatar -->
                        <div class="w-32 h-32 rounded-full overflow-hidden bg-white flex-shrink-0">
                            <img src="Profile Picture.png" alt="Profile Picture" class="w-full h-full object-cover" />
                        </div>
                <!-- Name -->
                        <div class="flex-1 flex items-center">
                            <div class="flex items-center gap-3">
                                <h1
                                    id="profile-fullname"
                                    class="text-4xl font-[900] font-league uppercase"
                                >
                                    ${user.fullName || 'FULL NAME'}
                                </h1>
                                <button onclick="editFullName()" class="hover:opacity-80">
                                    <i data-lucide="pencil" class="w-5 h-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Form -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        <div>
                            <label class="text-sm">Username</label>
                            <input value="${user.username || ''}" class="w-full border px-4 py-2" disabled />
                        </div>
                        <div>
                            <label class="text-sm">Email</label>
                            <input value="${user.email || ''}" class="w-full border px-4 py-2" disabled />
                        </div>
                        <div>
                            <label class="text-sm">Password</label>
                            <input type="password" value="${user.password || ''}" class="w-full border px-4 py-2" disabled />
                        </div>
                        <div class="flex items-end">
                            <button
                                onclick="handleLogout()"
                                class="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-bold transition"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        // --- CORE FUNCTIONS ---

        function renderApp() {
            const appRoot = document.getElementById('app-root');
            renderNavbar();
            let content = '';
            if (state.currentView === 'home') {
                content = renderHome();
            } else if (state.currentView === 'news') {
                content = renderNews();
            } else if (state.currentView === 'forum') {
                content = renderForum();
            } else if (state.currentView === 'login') {
                content = renderLogin();
            } else if (state.currentView === 'signup') {
                content = renderSignUp();
            } else if (state.currentView === 'profile') {
                content = renderProfile();
            } else {
                const categoryTitles = {
                    "action-shooter": "Action & Shooter",
                    "fighting": "Fighting",
                    "horror": "Horror",
                    "simulation": "Simulation",
                    "story": "Story",
                    "sports": "Sports",
                    "adventure": "Adventure",
                    "racing": "Racing"
                };
                if (categoryTitles[state.currentView]) {
                    content = renderCategoryView(
                        state.currentView,
                        categoryTitles[state.currentView].toUpperCase()
                    );
                }
            }
            appRoot.innerHTML = `
                <div class="page-transition">
                    ${content}
                </div>
            `;
            requestAnimationFrame(() => {
                const page = appRoot.querySelector('.page-transition');
                page.classList.add('show');
            });
            lucide.createIcons();
            window.scrollTo(0, 0);
        }

        // Navigation Controller
        function navigate(view) {
            if (state.isStoreOpen) {
                closeStoreDropdown();
            }

            state.currentView = view;

            setTimeout(() => {
                renderApp();
            }, 260);
        }


        function navigateToCategory(catName) {
            // Helper to map category name string to slug
            const map = {
                "Action & Shooter": "action-shooter",
                "Fighting": "fighting",
                "Horror": "horror",
                "Simulation": "simulation",
                "Story": "story",
                "Sports": "sports",
                "Adventure": "adventure",
                "Racing": "racing"
            };
            if(map[catName]) {
                navigate(map[catName]);
            }
        }
        function closeStoreDropdown() {
            if (!state.isStoreOpen || isStoreAnimating) return;
            const dropdown = document.getElementById('store-dropdown');
            if (!dropdown) {
                state.isStoreOpen = false;
                removeStoreListeners();
                renderNavbar();
                lucide.createIcons();
                return;
            }
            isStoreAnimating = true;
            dropdown.classList.remove('show');
            dropdown.classList.add('hide');
            dropdown.addEventListener('transitionend', function onEnd() {
            dropdown.removeEventListener('transitionend', onEnd);
                state.isStoreOpen = false;
                isStoreAnimating = false;
                removeStoreListeners();
                renderNavbar();
                lucide.createIcons();
            });
        }
        function toggleStore() {
            if (isStoreAnimating) return;
            if (state.isStoreOpen) {
                closeStoreDropdown();
                return;
            }
            state.isStoreOpen = true;
            renderNavbar();
            lucide.createIcons();
            requestAnimationFrame(() => {
                const dropdown = document.getElementById('store-dropdown');
                if (!dropdown) return;
                dropdown.classList.add('show');
                addStoreListeners();
                attachMouseLeaveHandler();
            });
        }

        // Hero Slider Logic
        function changeSlide(direction) {
    let nextIndex = state.heroSlideIndex + direction;
    if (nextIndex >= heroBanners.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = heroBanners.length - 1;

    state.heroSlideIndex = nextIndex;
    updateHeroBanner();
}


        function setSlide(index) {
    state.heroSlideIndex = index;
    updateHeroBanner();
}


        function updateHeroBanner() {
    const banner = heroBanners[state.heroSlideIndex];

    const heroContainer = document.getElementById('hero-container');
    if (!heroContainer) return;

    heroContainer.innerHTML = `
        <a href="${banner.link || '#'}" class="block w-full h-full cursor-pointer">
            ${
                banner.src
                    ? `<img src="${banner.src}" alt="${banner.alt}" class="w-full h-full object-cover transition-opacity duration-300" />`
                    : `<div class="img-placeholder bg-gradient-to-r from-[#3a0000] via-[#8b0000] to-[#3a0000] text-white flex flex-col items-center justify-center h-full border-none">
                        <span class="text-3xl font-bold mb-2 font-league">BANNER ${state.heroSlideIndex + 1}</span>
                        <span class="text-sm opacity-75 font-poppins">Place your full banner image here</span>
                       </div>`
            }
        </a>
    `;
    const dots = document.getElementById('hero-dots');
if (dots) {
    dots.innerHTML = heroBanners.map((_, idx) => `
        <button
            onclick="setSlide(${idx})"
            class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === state.heroSlideIndex
                    ? 'bg-[#1832a3] scale-125 ring-2 ring-white/50'
                    : 'bg-white/50 hover:bg-white'
            }"
        ></button>
    `).join('');
}
}

        // --- INITIALIZATION ---
        window.onload = function() {
            renderNavbar();
            renderApp();
            renderFooter();
            lucide.createIcons();
        };
        (function () {
        let currentScroll = window.pageYOffset;
        let targetScroll = currentScroll;
        let isScrolling = false;

        window.addEventListener("wheel", function (e) {
            e.preventDefault();

            targetScroll += e.deltaY;
            targetScroll = Math.max(
                0,
                Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
            );

            if (!isScrolling) smoothScroll();
        }, { passive: false });

        function smoothScroll() {
            isScrolling = true;
            currentScroll += (targetScroll - currentScroll) * 0.1;
            window.scrollTo(0, currentScroll);

            if (Math.abs(targetScroll - currentScroll) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            }
        }
    })();
    let storeListenersAttached = false;

        function addStoreListeners() {
            if (storeListenersAttached) return;
            storeListenersAttached = true;
            document.addEventListener('click', handleOutsideClick);
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        function removeStoreListeners() {
            storeListenersAttached = false;
            document.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        }
        function handleOutsideClick(e) {
            const dropdown = document.getElementById('store-dropdown');
            const storeTrigger = e.target.closest('[data-store-trigger]');
            if (!dropdown) return;
            if (!dropdown.contains(e.target) && !storeTrigger) {
                closeStoreDropdown();
            }
        }

        function handleScroll() {
            closeStoreDropdown();
        }
        function attachMouseLeaveHandler() {
            const dropdown = document.getElementById('store-dropdown');
            if (!dropdown) return;

            dropdown.addEventListener('mouseleave', (e) => {
                const rect = dropdown.getBoundingClientRect();

                if (e.clientY > rect.bottom) {
                    closeStoreDropdown();
                }
            });
        }

        function validateSignUpForm() {
            const username = document.getElementById('su-username').value.trim();
            const email = document.getElementById('su-email').value.trim();
            const password = document.getElementById('su-password').value;
            const confirm = document.getElementById('su-confirm').value;
            const btn = document.getElementById('signup-btn');

            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const passwordValid = password.length >= 8;
            const match = password === confirm;

            const valid = username && emailValid && passwordValid && match;

            btn.disabled = !valid;
            btn.classList.toggle('opacity-50', !valid);
            btn.classList.toggle('cursor-not-allowed', !valid);
        }

        function handleSignUp() {
            const user = {
                fullName: document.getElementById('su-username').value.trim(),
                username: document.getElementById('su-username').value.trim(),
                email: document.getElementById('su-email').value.trim(),
                password: document.getElementById('su-password').value
            };

            localStorage.setItem('imbored_user', JSON.stringify(user));
            localStorage.setItem('imbored_logged_in', 'true');

            navigate('profile');
        }

        function handleLogin() {
            const stored = JSON.parse(localStorage.getItem('imbored_user'));
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            if (stored && email === stored.email && password === stored.password) {
                localStorage.setItem('imbored_logged_in', 'true');
                navigate('profile');
            } else {
                alert('Invalid email or password');
            }
        }

        function togglePassword(inputId, toggleEl) {
            const input = document.getElementById(inputId);
            if (input.type === 'password') {
                input.type = 'text';
                toggleEl.textContent = 'hide';
            } else {
                input.type = 'password';
                toggleEl.textContent = 'show';
            }
        }
        function isLoggedIn() {
            return localStorage.getItem('imbored_logged_in') === 'true';
        }
        function editFullName() {
            const user = JSON.parse(localStorage.getItem('imbored_user'));
            const newName = prompt('Edit Full Name', user.fullName);
            if (newName && newName.trim()) {
                user.fullName = newName.trim();
                localStorage.setItem('imbored_user', JSON.stringify(user));
                document.getElementById('profile-fullname').textContent = user.fullName;
            }
        }
        let isStoreAnimating = false;
        function handleStoreClick(e) {
            e.stopPropagation(); // INI KUNCI UTAMA
            toggleStore();
        }
        function handleOutsideClick(e) {
            const dropdown = document.getElementById('store-dropdown');
            if (!dropdown) return;
            if (
                dropdown.contains(e.target) ||
                e.target.closest('[data-store-trigger]')
            ) {
                return;
            }
            closeStoreDropdown();
        }
        function handleLogout() {
            // Hapus status login
            localStorage.removeItem('imbored_logged_in');
            // Reset state UI
            state.isStoreOpen = false;
            state.currentView = 'home';
            // Render ulang aplikasi
            renderApp();
        }
        function handleGameCardClick(event, popupId) {
    event.stopPropagation();

    const popup = document.getElementById(popupId);
    if (!popup) return;

    const isOpen = popup.classList.contains('show');

    // Tutup semua popup lain
    document.querySelectorAll('.game-popup.show').forEach(p => {
        p.classList.remove('show');
    });

    // Toggle popup ini
    if (!isOpen) {
        popup.classList.add('show');
    }
}

// Klik di luar → tutup popup
document.addEventListener('click', () => {
    document.querySelectorAll('.game-popup.show').forEach(p => {
        p.classList.remove('show');
    });
});