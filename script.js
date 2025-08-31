document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    //  ✅ TODO: PASTE YOUR ACHIEVEMENT LIST HERE!
    // =================================================================
    //  - Add or remove categories and items as needed.
    //  - 'id' must be unique for each achievement.
    //  - 'name' is the description that will be displayed.
    //  - 'points' is the number of points it gives.
    // =================================================================
    const achievementsData = [
        {
            category: "Mirror Dungeon 6 Normal Clears",
            achievements: [
                { id: 'md6n_clear_1', name: 'Clear MD6 Normal 1 time', points: 25 },
                { id: 'md6n_clear_3', name: 'Clear MD6 Normal 3 times', points: 50 },
                { id: 'md6n_clear_5', name: 'Clear MD6 Normal 5 times', points: 75 },
                { id: 'md6n_clear_10', name: 'Clear MD6 Normal 10 times', points: 100 },
            ]
        },
        {
            category: "Mirror Dungeon 6 Hard Clears",
            achievements: [
                { id: 'md6h_clear_1', name: 'Clear MD6 Hard 1 time', points: 50 },
                { id: 'md6h_clear_3', name: 'Clear MD6 Hard 3 times', points: 100 },
                { id: 'md6h_clear_5', name: 'Clear MD6 Hard 5 times', points: 150 },
            ]
        },
        {
            category: "Special Encounters",
            achievements: [
                { id: 'encounter_my_form_empties', name: 'Defeat My Form Empties', points: 50 },
                { id: 'encounter_wayward_passenger', name: 'Defeat the Wayward Passenger', points: 50 },
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
