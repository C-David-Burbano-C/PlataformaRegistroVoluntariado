// Mockup Viewer Application
class MockupViewer {
    constructor() {
        this.currentIndex = 0;
        this.filteredMockups = [...mockups];
        this.isGridView = true;
        this.searchTerm = '';
        this.categoryFilter = 'all';

        this.initializeElements();
        this.bindEvents();
        this.renderGrid();
        this.updateTotalCount();
    }

    initializeElements() {
        this.gridView = document.getElementById('gridView');
        this.singleView = document.getElementById('singleView');
        this.mockupGrid = document.getElementById('mockupGrid');
        this.mockupFrame = document.getElementById('mockupFrame');
        this.searchInput = document.getElementById('searchInput');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.toggleViewBtn = document.getElementById('toggleView');
        this.fullscreenBtn = document.getElementById('fullscreenBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentMockup = document.getElementById('currentMockup');
        this.currentTitle = document.getElementById('currentTitle');
        this.totalCount = document.getElementById('totalCount');
    }

    bindEvents() {
        // Search and filter
        this.searchInput.addEventListener('input', () => this.handleSearch());
        this.categoryFilter.addEventListener('change', () => this.handleFilter());

        // View toggle
        this.toggleViewBtn.addEventListener('click', () => this.toggleView());

        // Fullscreen
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());

        // Navigation
        this.prevBtn.addEventListener('click', () => this.navigate(-1));
        this.nextBtn.addEventListener('click', () => this.navigate(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    handleSearch() {
        this.searchTerm = this.searchInput.value.toLowerCase();
        this.applyFilters();
    }

    handleFilter() {
        this.categoryFilter = document.getElementById('categoryFilter').value;
        this.applyFilters();
    }

    applyFilters() {
        this.filteredMockups = mockups.filter(mockup => {
            const matchesSearch = mockup.title.toLowerCase().includes(this.searchTerm) ||
                                mockup.id.toLowerCase().includes(this.searchTerm) ||
                                mockup.description.toLowerCase().includes(this.searchTerm);

            const matchesCategory = this.categoryFilter === 'all' || mockup.category === this.categoryFilter;

            return matchesSearch && matchesCategory;
        });

        this.renderGrid();
        this.updateTotalCount();
    }

    renderGrid() {
        this.mockupGrid.innerHTML = '';

        this.filteredMockups.forEach((mockup, index) => {
            const card = this.createMockupCard(mockup, index);
            this.mockupGrid.appendChild(card);
        });
    }

    createMockupCard(mockup, index) {
        const card = document.createElement('div');
        card.className = 'mockup-card';
        card.onclick = () => this.showMockup(index);

        card.innerHTML = `
            <div class="mockup-header">
                <div class="mockup-number">${mockup.id}</div>
                <div class="mockup-title">${mockup.title}</div>
            </div>
            <div class="mockup-preview">
                <div class="mockup-icon">${mockup.icon}</div>
                <div class="mockup-description">${mockup.description}</div>
                <button class="btn-primary">Ver Mockup</button>
            </div>
        `;

        return card;
    }

    showMockup(index) {
        this.currentIndex = index;
        this.isGridView = false;
        this.updateView();
        this.loadMockup();
    }

    toggleView() {
        this.isGridView = !this.isGridView;
        this.updateView();

        if (this.isGridView) {
            this.toggleViewBtn.textContent = 'Vista Lista';
        } else {
            this.toggleViewBtn.textContent = 'Vista Cuadrícula';
            this.loadMockup();
        }
    }

    updateView() {
        if (this.isGridView) {
            this.gridView.classList.remove('hidden');
            this.singleView.classList.add('hidden');
        } else {
            this.gridView.classList.add('hidden');
            this.singleView.classList.remove('hidden');
        }
    }

    loadMockup() {
        if (this.filteredMockups.length === 0) return;

        const mockup = this.filteredMockups[this.currentIndex];
        this.mockupFrame.src = mockup.file;
        this.currentMockup.textContent = mockup.id;
        this.currentTitle.textContent = mockup.title;

        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.filteredMockups.length - 1;
    }

    navigate(direction) {
        const newIndex = this.currentIndex + direction;
        if (newIndex >= 0 && newIndex < this.filteredMockups.length) {
            this.currentIndex = newIndex;
            this.loadMockup();
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            this.fullscreenBtn.textContent = 'Salir Pantalla Completa';
        } else {
            document.exitFullscreen();
            this.fullscreenBtn.textContent = 'Pantalla Completa';
        }
    }

    handleKeyPress(e) {
        if (this.isGridView) return;

        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.navigate(-1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.navigate(1);
                break;
            case 'Escape':
                e.preventDefault();
                this.toggleView();
                break;
            case 'f':
            case 'F':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    this.toggleFullscreen();
                }
                break;
        }
    }

    updateTotalCount() {
        this.totalCount.textContent = this.filteredMockups.length;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MockupViewer();
});