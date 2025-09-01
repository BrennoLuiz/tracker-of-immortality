document.addEventListener('DOMContentLoaded', () => {

    const achievementsData = [
        {
            category: "Collection",
            achievements: [
                { id: 'collect_10_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 10+ E.G.O Gifts', points: 10, current: 0, target: 10 },
                { id: 'collect_20_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 20+ E.G.O Gifts', points: 30, current: 0, target: 20 },
                { id: 'collect_25_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 25+ E.G.O Gifts', points: 40, current: 0, target: 25 },
                { id: 'collect_30_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 30+ E.G.O Gifts', points: 50, current: 0, target: 30 },
                { id: 'collect_15_burn_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Burn E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_15_bleed_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Bleed E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_15_tremor_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Tremor E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_15_rupture_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Rupture E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_15_sinking_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Sinking E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_15_poise_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Poise E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_15_charge_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 15+ Charge E.G.O Gifts', points: 20, current: 0, target: 15 },
                { id: 'collect_10_slash_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 10+ Slash E.G.O Gifts', points: 10, current: 0, target: 10 },
                { id: 'collect_10_pierce_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 10+ Pierce E.G.O Gifts', points: 10, current: 0, target: 10 },
                { id: 'collect_10_blunt_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 10+ Blunt E.G.O Gifts', points: 10, current: 0, target: 10 },
                { id: 'collect_5_tier4_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5+ Tier 4 or higher E.G.O Gifts', points: 30, current: 0, target: 5 },
                { id: 'collect_10_tier4_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 10+ Tier 4 or higher E.G.O Gifts', points: 40, current: 0, target: 10 },
                { id: 'collect_20_tier4_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 20+ Tier 4 or higher E.G.O Gifts', points: 80, current: 0, target: 20 },
                { id: 'collect_2_fusion_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 2+ Fusion Recipe-only Tier 4 E.G.O Gifts', points: 10, current: 0, target: 2 },
                { id: 'collect_5_fusion_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5+ Fusion Recipe-only Tier 4 E.G.O Gifts', points: 30, current: 0, target: 5 },
                { id: 'collect_10_fusion_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 10+ Fusion Recipe-only Tier 4 E.G.O Gifts', points: 50, current: 0, target: 10 },
                { id: 'collect_8_themefusion_gifts', name: 'Clear Mirror Dungeon at Floor 5 or higher with 8+ Theme Pack exclusive Fusion E.G.O Gifts', points: 50, current: 0, target: 8 },
                { id: 'collect_1_tier5_gift', name: 'Clear Mirror Dungeon at Floor 5 or higher with 1+ Tier 5 or EX E.G.O Gifts', points: 100, current: 0, target: 1 },
                { id: 'unlock_40_normal_packs', name: 'Unlock 40 or more Normal Difficulty Theme Packs', points: 50, current: 0, target: 40 },
                { id: 'unlock_70_hard_packs', name: 'Unlock 70 or more Hard Difficulty Theme Packs', points: 50, current: 0, target: 70 },
                { id: 'unlock_20_burn', name: 'Unlock 20 Burn E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_20_bleed', name: 'Unlock 20 Bleed E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_20_tremor', name: 'Unlock 20 Tremor E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_20_rupture', name: 'Unlock 20 Rupture E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_20_sinking', name: 'Unlock 20 Sinking E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_20_poise', name: 'Unlock 20 Poise E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_20_charge', name: 'Unlock 20 Charge E.G.O Gifts in the E.G.O Gift Compendium', points: 20, current: 0, target: 20 },
                { id: 'unlock_300_gifts', name: 'Unlock 300 E.G.O Gifts in the E.G.O Gift Compendium', points: 50, current: 0, target: 300 }
            ]
        },
        {
            category: "Clears",
            achievements: [
                { id: 'clear_f5_5_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 5 time(s)', points: 10, current: 0, target: 5 },
                { id: 'clear_f5_10_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 10 time(s)', points: 20, current: 0, target: 10 },
                { id: 'clear_f5_20_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 20 time(s)', points: 30, current: 0, target: 20 },
                { id: 'clear_f5_30_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 30 time(s)', points: 40, current: 0, target: 30 },
                { id: 'clear_f5_50_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 50 time(s)', points: 50, current: 0, target: 50 },
                { id: 'clear_f5_hard_1_time', name: 'Clear Mirror Dungeon at Floor 5 or higher 1 time(s) - every floor has to be in Hard Difficulty', points: 20, current: 0, target: 1 },
                { id: 'clear_f5_hard_5_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 5 time(s) - every floor has to be in Hard Difficulty', points: 30, current: 0, target: 5 },
                { id: 'clear_f5_hard_10_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 10 time(s) - every floor has to be in Hard Difficulty', points: 40, current: 0, target: 10 },
                { id: 'clear_f5_hard_15_times', name: 'Clear Mirror Dungeon at Floor 5 or higher 15 time(s) - every floor has to be in Hard Difficulty', points: 50, current: 0, target: 15 },
                { id: 'clear_f1_once', name: 'Clear Mirror Dungeon up to Floor 1 once', points: 10, current: 0, target: 1 },
                { id: 'clear_f2_once', name: 'Clear Mirror Dungeon up to Floor 2 once', points: 10, current: 0, target: 1 },
                { id: 'clear_f3_once', name: 'Clear Mirror Dungeon up to Floor 3 once', points: 10, current: 0, target: 1 },
                { id: 'clear_f4_once', name: 'Clear Mirror Dungeon up to Floor 4 once', points: 10, current: 0, target: 1 },
                { id: 'clear_f5_once', name: 'Clear Mirror Dungeon up to Floor 5 once', points: 10, current: 0, target: 1 },
                { id: 'clear_f6_once', name: 'Clear Mirror Dungeon up to Floor 6 once', points: 20, current: 0, target: 1 },
                { id: 'clear_f7_once', name: 'Clear Mirror Dungeon up to Floor 7 once', points: 30, current: 0, target: 1 },
                { id: 'clear_f8_once', name: 'Clear Mirror Dungeon up to Floor 8 once', points: 40, current: 0, target: 1 },
                { id: 'clear_f9_once', name: 'Clear Mirror Dungeon up to Floor 9 once', points: 40, current: 0, target: 1 },
                { id: 'clear_f10_once', name: 'Clear Mirror Dungeon up to Floor 10 once', points: 50, current: 0, target: 1 },
                { id: 'clear_f10_10_times', name: 'Clear Mirror Dungeon up to Floor 10 10 time(s)', points: 50, current: 0, target: 10 },
                { id: 'clear_6_rr_packs', name: 'Clear 6 Refraction Railway related Theme Packs in a single Mirror Dungeon run', points: 100, current: 0, target: 6 },
                { id: 'clear_8_canto_packs', name: 'Clear 8 or more Story Theme Packs with Canto names in a single Mirror Dungeon run', points: 100, current: 0, target: 8 }
            ]
        },
        {
            category: "Loadout",
            achievements: [
                { id: 'loadout_5_burn', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Burn Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_5_bleed', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Bleed Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_5_tremor', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Tremor Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_5_rupture', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Rupture Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_5_sinking', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Sinking Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_5_poise', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Poise Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_5_charge', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Charge Keyword Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 10, current: 0, target: 5 },
                { id: 'loadout_3t_2yuro', name: 'Clear Mirror Dungeon at Floor 5 or higher with 3+ T Corp. and 2+ Yurodiviye Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 30, current: 0, target: 5 }, // Combined target for 3+2
                { id: 'loadout_4r', name: 'Clear Mirror Dungeon at Floor 5 or higher with 4 or more R Corp. Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 30, current: 0, target: 4 },
                { id: 'loadout_4zwei', name: 'Clear Mirror Dungeon at Floor 5 or higher with 4 or more Zwei Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 50, current: 0, target: 4 },
                { id: 'loadout_3cinq', name: 'Clear Mirror Dungeon at Floor 5 or higher with 3 or more Cinq Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 30, current: 0, target: 3 },
                { id: 'loadout_3rose', name: 'Clear Mirror Dungeon at Floor 5 or higher with 3 or more Rosespanner Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 50, current: 0, target: 3 },
                { id: 'loadout_5heishou', name: 'Clear Mirror Dungeon at Floor 5 or higher with 5 or more Heishou Pack Identities in your Loadout at the time of completion (Incompletable by Rental Teams)', points: 30, current: 0, target: 5 },
                { id: 'loadout_unconfront_4n', name: 'Defeat \'The Unconfronting\' Theme Pack boss with 4 or more N Corp. Fanatic Identities, including \'The One Who Shall Grip Sinclair\', in your Loadout (Counting Backup Units; Incompletable by Rental Teams)', points: 40, current: 0, target: 4 },
                { id: 'loadout_unchanging_4tech', name: 'Defeat \'The Unchanging\' Theme Pack boss with 4 or more Technology Liberation Alliance Identities, including \'Effloresced E.G.O::Spicebush Yi Sang\', in your Loadout (Counting Backup Units; Incompletable by Rental Teams)', points: 40, current: 0, target: 4 },
                { id: 'loadout_evil_3pequod', name: 'Defeat \'The Evil Defining\' Theme Pack boss with 3 or more of The Pequod Identities, including \'The Pequod Captain Ishmael\', in your Loadout (Counting Backup Units; Incompletable by Rental Teams)', points: 50, current: 0, target: 3 },
                { id: 'loadout_surrendered_6deploy', name: 'Defeat \'The Surrendered Witnessing\' Theme Pack boss with 6 or more Identities Deployed. (Team must include \'The Lord of Hongyuan Hong Lu\', \'Family Hierarch Candidate Ishmael\', and at least 4 Heishou Pack Identities; counting Backup Units; Incompletable by Rental Teams)', points: 60, current: 0, target: 6 },
                { id: 'loadout_rental_clear', name: 'Clear Mirror Dungeon Floor 5 using a Rental Team', points: 10, current: 0, target: 1 }
            ]
        },
        {
            category: "Shop",
            achievements: [
                { id: 'shop_refresh_10', name: 'In a single run, use the Shop Refresh function(including Keyword Refresh) 10 or more times and clear Mirror dungeon at Floor 5 or higher', points: 10, current: 0, target: 10 },
                { id: 'shop_refresh_20', name: 'In a single run, use the Shop Refresh function(including Keyword Refresh) 20 or more times and clear Mirror dungeon at Floor 5 or higher', points: 30, current: 0, target: 20 },
                { id: 'shop_refresh_30', name: 'In a single run, use the Shop Refresh function(including Keyword Refresh) 30 or more times and clear Mirror dungeon at Floor 5 or higher', points: 50, current: 0, target: 30 },
                { id: 'shop_refresh_40', name: 'In a single run, use the Shop Refresh function(including Keyword Refresh) 40 or more times and clear Mirror dungeon at Floor 5 or higher', points: 80, current: 0, target: 40 },
                { id: 'shop_refresh_50', name: 'In a single run, use the Shop Refresh function(including Keyword Refresh) 50 or more times and clear Mirror dungeon at Floor 5 or higher', points: 100, current: 0, target: 50 },
                { id: 'shop_purchase_10', name: 'In a single run, purchase 10 or more E.G.O Gifts from Shops and clear Mirror Dungeon at Floor 5 or higher', points: 10, current: 0, target: 10 },
                { id: 'shop_purchase_20', name: 'In a single run, purchase 20 or more E.G.O Gifts from Shops and clear Mirror Dungeon at Floor 5 or higher', points: 40, current: 0, target: 20 },
                { id: 'shop_purchase_30', name: 'In a single run, purchase 30 or more E.G.O Gifts from Shops and clear Mirror Dungeon at Floor 5 or higher', points: 60, current: 0, target: 30 },
                { id: 'shop_purchase_50', name: 'In a single run, purchase 50 or more E.G.O Gifts from Shops and clear Mirror Dungeon at Floor 5 or higher', points: 100, current: 0, target: 50 },
                { id: 'shop_carry_5_enhanced', name: 'In a single run, clear Mirror Dungeon at Floor 5 or higher while carrying 5 or more Enhanced E.G.O Gifts (Enhancement stage does not matter)', points: 20, current: 0, target: 5 },
                { id: 'shop_carry_10_enhanced', name: 'In a single run, clear Mirror Dungeon at Floor 5 or higher while carrying 10 or more Enhanced E.G.O Gifts (Enhancement stage does not matter)', points: 40, current: 0, target: 10 },
                { id: 'shop_carry_15_enhanced', name: 'In a single run, clear Mirror Dungeon at Floor 5 or higher while carrying 15 or more Enhanced E.G.O Gifts (Enhancement stage does not matter)', points: 60, current: 0, target: 15 },
                { id: 'shop_carry_20_enhanced', name: 'In a single run, clear Mirror Dungeon at Floor 5 or higher while carrying 20 or more Enhanced E.G.O Gifts (Enhancement stage does not matter)', points: 80, current: 0, target: 20 },
                { id: 'shop_cost_1000', name: 'Clear Mirror Dungeon at Floor 5 or higher with 1000 or more Cost', points: 30, current: 0, target: 1000 },
                { id: 'shop_cost_3000', name: 'Clear Mirror Dungeon at Floor 5 or higher with 3000 or more Cost', points: 70, current: 0, target: 3000 },
                { id: 'shop_replace_s1', name: 'For 1 ally, replace all their Skill 1 copies with Skill 3 in the Shop; then, clear Mirror Dungeon Floor 5 or higher', points: 50, current: 0, target: 1 },
                { id: 'shop_replace_s1_s2', name: 'For 1 ally, replace all their Skill 1 and Skill 2 copies with Skill 3 in the Shop; then, clear Mirror Dungeon Floor 5 or higher', points: 100, current: 0, target: 1 },
                { id: 'shop_fusion_10', name: 'In a single run, use the Fusion function at least 10 times and clear Mirror Dungeon at Floor 5 or higher', points: 40, current: 0, target: 10 },
                { id: 'shop_fusion_20', name: 'In a single run, use the Fusion function at least 20 times and clear Mirror Dungeon at Floor 5 or higher', points: 80, current: 0, target: 20 },
                { id: 'shop_cost_0', name: 'Clear Mirror Dungeon at Floor 5 or higher with 0 Cost when exiting the Store on your final floor.', points: 100, current: 0, target: 0 }
            ]
        },
        {
            category: "Combat",
            achievements: [
                { id: 'combat_dmg_1k', name: 'Deal 1000+ Skill damage against an enemy with a single Skill use (Shield HP dmg & dmg dealt On Hit such as Sinking Deluge and Time Moratorium counts; excludes dmg from Keywords and other sources)', points: 30, current: 0, target: 1000 },
                { id: 'combat_dmg_3k', name: 'Deal 3000+ Skill damage against an enemy with a single Skill use (Shield HP dmg & dmg dealt On Hit such as Sinking Deluge and Time Moratorium counts; excludes dmg from Keywords and other sources)', points: 40, current: 0, target: 3000 },
                { id: 'combat_dmg_5k', name: 'Deal 5000+ Skill damage against an enemy with a single Skill use (Shield HP dmg & dmg dealt On Hit such as Sinking Deluge and Time Moratorium counts; excludes dmg from Keywords and other sources)', points: 60, current: 0, target: 5000 },
                { id: 'combat_dmg_10k', name: 'Deal 10000+ Skill damage against an enemy with a single Skill use (Shield HP dmg & dmg dealt On Hit such as Sinking Deluge and Time Moratorium counts; excludes dmg from Keywords and other sources)', points: 80, current: 0, target: 10000 },
                { id: 'combat_dmg_15k', name: 'Deal 15000+ Skill damage against an enemy with a single Skill use (Shield HP dmg & dmg dealt On Hit such as Sinking Deluge and Time Moratorium counts; excludes dmg from Keywords and other sources)', points: 100, current: 0, target: 15000 },
                { id: 'combat_lvl_80', name: 'In a single run, Clear Mirror Dungeon at Floor 5 or higher with all Identities at Level 80+', points: 80, current: 0, target: 80 },
                { id: 'combat_7_crit', name: 'In an Encounter, have 7 Sinners Hit the main target Critically with all of their remaining Coins in the first turn', points: 70, current: 0, target: 7 },
                { id: 'combat_clash_80', name: 'In an Encounter, reach Clash Power 80 or higher', points: 80, current: 0, target: 80 },
                { id: 'combat_imposed_weight', name: 'In a Mirror Dungeon boss fight at Floor 5 or higher, activate the effect of Imposed Weight E.G.O Gift after 2 turns, then clear the Encounter', points: 100, current: 0, target: 1 },
                { id: 'combat_7_sins', name: 'In a single turn, equip 7+ different types of Sin Affinities at once', points: 70, current: 0, target: 7 },
                { id: 'combat_speed_20', name: 'In an Encounter, reach a Speed value of 20 or higher with a Sinner', points: 50, current: 0, target: 20 },
                { id: 'combat_burn_99', name: 'Raise 1 enemy\'s Burn Potency to 99 (in Focused Encounters, a Part)', points: 20, current: 0, target: 99 },
                { id: 'combat_bleed_99', name: 'Raise 1 enemy\'s Bleed Potency to 99 (in Focused Encounters, a Part)', points: 20, current: 0, target: 99 },
                { id: 'combat_tremor_99', name: 'Raise 1 enemy\'s Tremor Potency to 99 (in Focused Encounters, a Part)', points: 20, current: 0, target: 99 },
                { id: 'combat_rupture_99', name: 'Raise 1 enemy\'s Rupture Potency to 99 (in Focused Encounters, a Part)', points: 20, current: 0, target: 99 },
                { id: 'combat_sinking_99', name: 'Raise 1 enemy\'s Sinking Potency to 99 (in Focused Encounters, a Part)', points: 20, current: 0, target: 99 },
                { id: 'combat_poise_99', name: 'Raise 1 ally\'s Poise Potency to 99', points: 20, current: 0, target: 99 },
                { id: 'combat_charge_10', name: 'Raise 1 ally\'s Charge Potency to 10', points: 20, current: 0, target: 10 },
                { id: 'combat_kill_7', name: 'Kill 7+ enemies with a single Attack Skill use in an Encounter (Enemies must be alive when the attack starts; can use E.G.O Skills)', points: 70, current: 0, target: 7 }
            ]
        }
    ];

    const achievementListContainer = document.getElementById('achievement-list');
    const totalPointsEl = document.getElementById('total-points');
    const passLevelEl = document.getElementById('pass-level');
    const progressBarEl = document.getElementById('progress-bar'); // Main progress bar
    const resetButton = document.getElementById('reset-button');
    const tabButtons = document.querySelectorAll('.sidebar .tab-button');
    const categoryTitleEl = document.getElementById('category-title');
    const PASS_LEVEL_POINTS = 100;
    
    let completedAchievements = {};
    let currentCategory = "Collection"; // Default category

    // Calculate total possible points once
    const totalPossiblePoints = achievementsData.reduce((total, category) => {
        return total + category.achievements.reduce((catTotal, ach) => catTotal + ach.points, 0);
    }, 0);

    function loadProgress() {
        const savedProgress = localStorage.getItem('md6_achievements_v3'); // Updated key for new data structure
        if (savedProgress) {
            completedAchievements = JSON.parse(savedProgress);
        } else {
            // Initialize progress for all achievements if no save found
            achievementsData.forEach(cat => {
                cat.achievements.forEach(ach => {
                    completedAchievements[ach.id] = {
                        isCompleted: false,
                        currentProgress: ach.current // Store initial current progress
                    };
                });
            });
        }
    }

    function saveProgress() {
        localStorage.setItem('md6_achievements_v3', JSON.stringify(completedAchievements));
    }

function renderAchievements(categoryName) {
    achievementListContainer.innerHTML = ''; // Clear previous list
    const categoryData = achievementsData.find(cat => cat.category === categoryName);
    
    categoryTitleEl.textContent = categoryName;

    if (!categoryData) return;

    // This is the new sorting logic, placed right after finding the category data
    const sortedAchievements = [...categoryData.achievements].sort((a, b) => {
        const aCompleted = completedAchievements[a.id]?.isCompleted || false;
        const bCompleted = completedAchievements[b.id]?.isCompleted || false;
        return aCompleted - bCompleted; // This pushes completed items to the end
    });

    // The rest of the function now uses the new 'sortedAchievements' array
    sortedAchievements.forEach(ach => {
        const achProgress = completedAchievements[ach.id] || { isCompleted: false, currentProgress: ach.current };
        const isCompleted = achProgress.isCompleted;
        const currentProgress = achProgress.currentProgress;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'achievement-item';
        if (isCompleted) {
            itemDiv.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = ach.id;
        checkbox.checked = isCompleted;
        
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'achievement-details';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'achievement-name';
        nameSpan.textContent = ach.name;
        detailsDiv.appendChild(nameSpan);

        if (ach.target > 1) {
            const progressBarWrapper = document.createElement('div');
            progressBarWrapper.className = 'achievement-progress-bar-wrapper';

            const progressBarFill = document.createElement('div');
            progressBarFill.className = 'achievement-progress-bar-fill';
            const progressPercentage = Math.min(100, (currentProgress / ach.target) * 100);
            progressBarFill.style.width = `${progressPercentage}%`;
            
            const progressText = document.createElement('span');
            progressText.className = 'achievement-progress-text';
            progressText.textContent = `${currentProgress}/${ach.target}`;

            progressBarWrapper.appendChild(progressBarFill);
            progressBarWrapper.appendChild(progressText);
            detailsDiv.appendChild(progressBarWrapper);
        }
        
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(detailsDiv);

        if (isCompleted) {
            const stamp = document.createElement('div');
            stamp.className = 'completed-stamp';
            itemDiv.appendChild(stamp);
        }
        
        const pointsSpan = document.createElement('span');
        pointsSpan.className = 'achievement-points';
        pointsSpan.textContent = ach.points;
        itemDiv.appendChild(pointsSpan);

        achievementListContainer.appendChild(itemDiv);
    });
}

    // Example of how to manually update an achievement's progress (for testing/future input)
    // You would call this when a user performs an action that updates progress
    // function updateAchievementProgress(id, newProgress) {
    //     if (completedAchievements[id]) {
    //         const achDef = achievementsData.flatMap(cat => cat.achievements).find(a => a.id === id);
    //         if (achDef) {
    //             completedAchievements[id].currentProgress = Math.min(newProgress, achDef.target);
    //             if (completedAchievements[id].currentProgress === achDef.target) {
    //                 completedAchievements[id].isCompleted = true;
    //             } else {
    //                 completedAchievements[id].isCompleted = false;
    //             }
    //             saveProgress();
    //             updateSummary();
    //             renderAchievements(currentCategory);
    //         }
    //     }
    // }


    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
            completedAchievements = {}; // Clear all progress
            // Re-initialize with default progress
            achievementsData.forEach(cat => {
                cat.achievements.forEach(ach => {
                    completedAchievements[ach.id] = {
                        isCompleted: false,
                        currentProgress: ach.current
                    };
                });
            });
            saveProgress();
            updateSummary();
            renderAchievements(currentCategory);
        }
    });

    // Initial page load
    loadProgress();
    updateSummary();
    renderAchievements(currentCategory); // Render the default category
});
