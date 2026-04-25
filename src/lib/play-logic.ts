const STORAGE_KEY = 'cookie-clicker-save';

function getState(): GameState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        totalCookies: parsed.totalCookies || 0,
        cookiesPerSecond: parsed.cookiesPerSecond || 0,
        isPaused: parsed.isPaused || false,
        upgradeCosts: parsed.upgradeCosts || { cursor: 15, grandma: 100, farm: 1100 },
        buildingQuantities: parsed.buildingQuantities || [0, 0, 0],
        buildingCosts: parsed.buildingCosts || { cursor: 15, grandma: 100, farm: 1100 },
        totalBaked: parsed.totalBaked || 0,
        timePlayed: parsed.timePlayed || 0,
        totalClicks: parsed.totalClicks || 0,
        achievementsUnlocked: parsed.achievementsUnlocked || [],
      };
    }
  } catch {
    // fallback
  }
  return {
    totalCookies: 0,
    cookiesPerSecond: 0,
    isPaused: false,
    upgradeCosts: { cursor: 15, grandma: 100, farm: 1100 },
    buildingQuantities: [0, 0, 0],
    buildingCosts: { cursor: 15, grandma: 100, farm: 1100 },
    totalBaked: 0,
    timePlayed: 0,
    totalClicks: 0,
    achievementsUnlocked: [],
  };
}

function saveState(state: GameState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silent fail
  }
}

export function onCookieClick(event: { preventDefault(): void }): void {
  event.preventDefault();
  const state = getState();
  state.totalCookies += 1 + Math.floor(state.buildingQuantities[0] * 0.1);
  state.totalClicks += 1;
  state.totalBaked += 1 + Math.floor(state.buildingQuantities[0] * 0.1);
  if (state.totalClicks === 1 && !state.achievementsUnlocked.includes('first-cookie')) {
    state.achievementsUnlocked.push('first-cookie');
  }
  saveState(state);
  window.dispatchEvent(new CustomEvent('gameStateUpdate', { detail: state }));
}

export function togglePause(event: { preventDefault(): void }): void {
  event.preventDefault();
  const state = getState();
  state.isPaused = !state.isPaused;
  saveState(state);
  window.dispatchEvent(new CustomEvent('gameStateUpdate', { detail: state }));
}

export function exportSave(event: { preventDefault(): void }): void {
  event.preventDefault();
  const state = getState();
  const dataStr = JSON.stringify(state, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `cookie-clicker-save-${Date.now()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export function buyUpgrade(event: { preventDefault(): void; currentTarget: HTMLElement }): void {
  event.preventDefault();
  const state = getState();
  const upgrade = event.currentTarget.dataset.upgrade;
  if (!upgrade || !state.upgradeCosts[upgrade]) return;

  const cost = state.upgradeCosts[upgrade];
  if (state.totalCookies < cost) return;

  state.totalCookies -= cost;
  state.upgradeCosts[upgrade] *= 1.15;
  state.cookiesPerSecond += Math.floor(Math.random() * 2) + 1;
  saveState(state);
  window.dispatchEvent(new CustomEvent('gameStateUpdate', { detail: state }));
}

export function setBuildingQuantity(event: { preventDefault(): void; currentTarget: HTMLElement }, value: number[]): void {
  event.preventDefault();
  const state = getState();
  const building = event.currentTarget.dataset.building;
  if (!building || !state.buildingQuantities[parseInt(building)]) return;

  const index = parseInt(building);
  state.buildingQuantities[index] = Math.floor(value[index] || 0);
  state.cookiesPerSecond = state.buildingQuantities.reduce((sum, qty, i) => {
    const baseCPS = [0.1, 1, 8][i] || 0;
    return sum + qty * baseCPS;
  }, 0);
  saveState(state);
  window.dispatchEvent(new CustomEvent('gameStateUpdate', { detail: state }));
}

export function buyBuilding(event: { preventDefault(): void; currentTarget: HTMLElement }): void {
  event.preventDefault();
  const state = getState();
  const building = event.currentTarget.dataset.building;
  if (!building || !state.buildingCosts[building]) return;

  const cost = state.buildingCosts[building];
  if (state.totalCookies < cost) return;

  state.totalCookies -= cost;
  const index = ['cursor', 'grandma', 'farm'].indexOf(building);
  if (index !== -1) {
    state.buildingQuantities[index] += 1;
  }
  state.buildingCosts[building] = Math.floor(cost * 1.15);
  state.cookiesPerSecond = state.buildingQuantities.reduce((sum, qty, i) => {
    const baseCPS = [0.1, 1, 8][i] || 0;
    return sum + qty * baseCPS;
  }, 0);
  saveState(state);
  window.dispatchEvent(new CustomEvent('gameStateUpdate', { detail: state }));
}

// Auto-save and CPS ticker
setInterval(() => {
  const state = getState();
  if (!state.isPaused) {
    state.totalCookies += Math.floor(state.cookiesPerSecond / 10);
    state.totalBaked += Math.floor(state.cookiesPerSecond / 10);
    state.timePlayed += 0.1;
    saveState(state);
    window.dispatchEvent(new CustomEvent('gameStateUpdate', { detail: state }));
  }
}, 100);
