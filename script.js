document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    //  ✅ ACHIEVEMENT LIST - POPULATED FROM YOUR SPREADSHEET
    // =================================================================
    const achievementsData = [
        {
            category: "Dungeon Clears & E.G.O. Gift Count",
            achievements: [
                { id: 'clear_10_gifts', name: 'Clear Floor 5+ with 10+ E.G.O Gifts', points: 10 },
                { id: 'clear_20_gifts', name: 'Clear Floor 5+ with 20+ E.G.O Gifts', points: 30 },
                { id: 'clear_25_gifts', name: 'Clear Floor 5+ with 25+ E.G.O Gifts', points: 40 },
                { id: 'clear_30_gifts', name: 'Clear Floor 5+ with 30+ E.G.O Gifts', points: 50 },
                { id: 'clear_5_tier4_gifts', name: 'Clear Floor 5+ with 5+ Tier 4 or higher E.G.O Gifts', points: 30 },
                { id: 'clear_10_tier4_gifts', name: 'Clear Floor 5+ with 10+ Tier 4 or higher E.G.O Gifts', points: 40 },
                { id: 'clear_20_tier4_gifts', name: 'Clear Floor 5+ with 20+ Tier 4 or higher E.G.O Gifts', points: 80 },
                { id: 'clear_2_fusion_gifts', name: 'Clear Floor 5+ with 2+ Fusion Recipe-only Tier 4 E.G.O Gifts', points: 10 },
                { id: 'clear_5_fusion_gifts', name: 'Clear Floor 5+ with 5+ Fusion Recipe-only Tier 4 E.G.O Gifts', points: 30 },
                { id: 'clear_10_fusion_gifts', name: 'Clear Floor 5+ with 10+ Fusion Recipe-only Tier 4 E.G.O Gifts', points: 50 },
                { id: 'clear_8_themefusion_gifts', name: 'Clear Floor 5+ with 8+ Theme Pack exclusive Fusion E.G.O Gifts', points: 50 },
                { id: 'clear_1_tier5_gift', name: 'Clear Floor 5+ with 1+ Tier 5 or EX E.G.O Gifts', points: 100 }
            ]
        },
        {
            category: "E.G.O. Gift Status Effects",
            achievements: [
                { id: 'clear_15_burn', name: 'Clear Floor 5+ with 15+ Burn E.G.O Gifts', points: 20 },
                { id: 'clear_15_bleed', name: 'Clear Floor 5+ with 15+ Bleed E.G.O Gifts', points: 20 },
                { id: 'clear_15_tremor', name: 'Clear Floor 5+ with 15+ Tremor E.G.O Gifts', points: 20 },
                { id: 'clear_15_rupture', name: 'Clear Floor 5+ with 15+ Rupture E.G.O Gifts', points: 20 },
                { id: 'clear_15_sinking', name: 'Clear Floor 5+ with 15+ Sinking E.G.O Gifts', points: 20 },
                { id: 'clear_15_poise', name: 'Clear Floor 5+ with 15+ Poise E.G.O Gifts', points: 20 },
                { id: 'clear_15_charge', name: 'Clear Floor 5+ with 15+ Charge E.G.O Gifts', points: 20 }
            ]
        },
        {
            category: "E.G.O. Gift Damage Types",
            achievements: [
                { id: 'clear_10_slash', name: 'Clear Floor 5+ with 10+ Slash E.G.O Gifts', points: 10 },
                { id: 'clear_10_pierce', name: 'Clear Floor 5+ with 10+ Pierce E.G.O Gifts', points: 10 },
                { id: 'clear_10_blunt', name: 'Clear Floor 5+ with 10+ Blunt E.G.O Gifts', points: 10 }
            ]
        },
        {
            category: "Compendium & Theme Pack Unlocks",
            achievements: [
                { id: 'unlock_40_normal_packs', name: 'Unlock 40 or more Normal Difficulty Theme Packs', points: 50 },
                { id: 'unlock_70_hard_packs', name: 'Unlock 70 or more Hard Difficulty Theme Packs', points: 50 },
                { id: 'unlock_20_burn', name: 'Unlock 20 Burn E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_20_bleed', name: 'Unlock 20 Bleed E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_20_tremor', name: 'Unlock 20 Tremor E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_20_rupture', name: 'Unlock 20 Rupture E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_20_sinking', name: 'Unlock 20 Sinking E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_20_poise', name: 'Unlock 20 Poise E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_20_charge', name: 'Unlock 20 Charge E.G.O Gifts in the Compendium', points: 20 },
                { id: 'unlock_300_gifts', name: 'Unlock 300 E.G.O Gifts in the E.G.O Gift Compendium', points: 50 }
            ]
        }
    ];
    // =================================================================
    //  END OF ACHIEVEMENT LIST
    // =================================================================


    const achievementListContainer = document.getElementById('achievement-list');
    const totalPointsEl = document.getElementById('total-points');
    const passLevelEl = document.getElementById('pass-level');
    const progressBarEl = document.getElementById('progress-bar');
    const progressTextEl = document.getElementById('progress-text');
    const resetButton = document.getElementById('reset-button');
    const PASS_LEVEL_POINTS = 100;
    
    let completedAchievements = {};

    function loadProgress() {
        const savedProgress = localStorage.getItem('md6_achievements');
        if (savedProgress) {
            completedAchievements = JSON.parse(savedProgress);
        }
    }

    function saveProgress() {
        localStorage.setItem('md6_achievements', JSON.stringify(completedAchievements));
    }

    function renderAchievements() {
        achievementListContainer.innerHTML = ''; // Clear existing list
        achievementsData.forEach(categoryData => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'achievement-category';

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = categoryData.category;
            categoryDiv.appendChild(categoryTitle);

            categoryData.achievements.forEach(ach => {
                const isCompleted = completedAchievements[ach.id] || false;

                const itemDiv = document.createElement('div');
                itemDiv.className = 'achievement-item';
                if (isCompleted) {
                    itemDiv.classList.add('completed');
                }
                itemDiv.dataset.id = ach.id;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = ach.id;
                checkbox.checked = isCompleted;

                const nameSpan = document.createElement('span');
                nameSpan.className = 'achievement-name';
                nameSpan.textContent = ach.name;

                const pointsSpan = document.createElement('span');
                pointsSpan.className = 'achievement-points';
                pointsSpan.textContent = `${ach.points} pts`;

                itemDiv.appendChild(checkbox);
                itemDiv.appendChild(nameSpan);
                itemDiv.appendChild(pointsSpan);
                categoryDiv.appendChild(itemDiv);
            });
            achievementListContainer.appendChild(categoryDiv);
        });
    }

    function updateSummary() {
        let totalPoints = 0;
        achievementsData.forEach(cat => {
            cat.achievements.forEach(ach => {
                if (completedAchievements[ach.id]) {
                    totalPoints += ach.points;
                }
            });
        });

        const passLevel = Math.floor(totalPoints / PASS_LEVEL_POINTS);
        const pointsToNextLevel = totalPoints % PASS_LEVEL_POINTS;
        const progressPercentage = (pointsToNextLevel / PASS_LEVEL_POINTS) * 100;

        totalPointsEl.textContent = totalPoints;
        passLevelEl.textContent = passLevel;
        progressBarEl.style.width = `${progressPercentage}%`;
        progressTextEl.textContent = `${pointsToNextLevel} / ${PASS_LEVEL_POINTS} to next level`;
    }

    achievementListContainer.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const achievementId = e.target.id;
            completedAchievements[achievementId] = e.target.checked;
            
            e.target.closest('.achievement-item').classList.toggle('completed', e.target.checked);
            
            saveProgress();
            updateSummary();
        }
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
            completedAchievements = {};
            saveProgress();
            renderAchievements();
            updateSummary();
        }
    });

    // Initial setup
    loadProgress();
    renderAchievements();
    updateSummary();
});
