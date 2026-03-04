# MOAB_Reentry_Sim_V69

Reentry Trajectory Simulation & Visualization

---

## Installation

### macOS
1. Download `MOAB_Reentry_Sim_V69-69.0.0-universal.dmg` from the [Releases](../../releases) page
2. Open the `.dmg` and drag the app to your **Applications** folder

### Windows
1. Download `MOAB_Reentry_Sim_V69-69.0.0-win.zip` from the [Releases](../../releases) page
2. Extract the zip and run `MOAB_Reentry_Sim_V69.exe`

---

## First Launch — Security Warnings

The app is not code-signed, so both macOS and Windows will show a security warning on first launch.

### macOS — "Apple could not verify..."

If you see the **"Not Opened"** Gatekeeper dialog, click **Done**, then run this in Terminal:

```
xattr -cr /Applications/MOAB_Reentry_Sim_V69.app
```

Then double-click the app — it will open normally from then on.

Alternatively:
1. Click **Done** to dismiss the dialog
2. Go to **System Settings → Privacy & Security**
3. Scroll down to the blocked app notice
4. Click **Open Anyway**

### Windows — SmartScreen warning

1. Click **More info**
2. Click **Run anyway**

---

## Usage

1. Launch the app — the **Simulation** window opens automatically
2. Configure your reentry parameters and click **Simulate**
3. The **3D Visualization** window opens alongside it
4. Use the L/D slider to switch between vehicles in the visualization
