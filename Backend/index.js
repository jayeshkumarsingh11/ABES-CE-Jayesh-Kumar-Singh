const express = require('express');
const cors = require('cors');
const si = require('systeminformation');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
    res.json({ ok: true, time: new Date().toISOString() });
});

app.get('/api/memory', async (_req, res) => {
    try {
        const mem = await si.mem();
        const totalBytes = mem.total;
        const freeBytes = mem.available ?? mem.free;
        const usedBytes = totalBytes - freeBytes;
        const usedPercent = totalBytes ? (usedBytes / totalBytes) * 100 : 0;

        res.json({ totalBytes, freeBytes, usedBytes, usedPercent });
    } catch (err) {
        res.status(500).json({ error: 'Failed to read memory usage', details: String(err?.message ?? err) });
    }
});

app.get('/api/cpu', async (_req, res) => {
    try {
        const [load, cpu] = await Promise.all([si.currentLoad(), si.cpu()]);
        res.json({
            cores: cpu.cores,
            currentLoadPercent: load.currentLoad,
            userLoadPercent: load.currentLoadUser,
            systemLoadPercent: load.currentLoadSystem,
            idlePercent: load.currentLoadIdle,
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to read CPU usage', details: String(err?.message ?? err) });
    }
});

app.get('/api/disk', async (_req, res) => {
    try {
        const disks = await si.fsSize();

        const totalBytes = disks.reduce((sum, d) => sum + (d.size ?? 0), 0);
        const usedBytes = disks.reduce((sum, d) => sum + (d.used ?? 0), 0);
        const freeBytes = Math.max(totalBytes - usedBytes, 0);
        const usedPercent = totalBytes ? (usedBytes / totalBytes) * 100 : 0;

        res.json({ totalBytes, usedBytes, freeBytes, usedPercent, drives: disks.length });
    } catch (err) {
        res.status(500).json({ error: 'Failed to read disk usage', details: String(err?.message ?? err) });
    }
});

app.get('/api/network', async (_req, res) => {
    try {
        const stats = await si.networkStats();

        const rx_bytes = stats.reduce((sum, s) => sum + (s.rx_bytes ?? 0), 0);
        const tx_bytes = stats.reduce((sum, s) => sum + (s.tx_bytes ?? 0), 0);
        const rx_sec = stats.reduce((sum, s) => sum + (s.rx_sec ?? 0), 0);
        const tx_sec = stats.reduce((sum, s) => sum + (s.tx_sec ?? 0), 0);

        res.json({ interfaces: stats.length, rx_bytes, tx_bytes, rx_sec, tx_sec });
    } catch (err) {
        res.status(500).json({ error: 'Failed to read network usage', details: String(err?.message ?? err) });
    }
});

const PORT = Number(process.env.PORT) || 8000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Backend API running on http://localhost:${PORT}`);
});