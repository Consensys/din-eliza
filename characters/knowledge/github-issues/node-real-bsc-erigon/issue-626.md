# [bsc-erigon] v1.3.2-beta2 sync download-rate=0B/s

- **Issue**: #626
- **Status**: closed
- **Created**: 2/25/2025, 7:10:20 AM
- **Updated**: 3/7/2025, 1:22:46 AM
- **URL**: https://github.com/node-real/bsc-erigon/issues/626

## Description

#### System information

Erigon version: `v1.3.1-beta2`

OS & Version: Linux

#### Issue

bsc-erigon v1.3.1-beta2 initial sync is stuck at download-rate=0B/s for many hours:

```
erigon  | [INFO] [02-25|12:07:15.856] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h54m40s download-rate=0B/s completion-rate=0B/s alloc=348.1MB sys=2.9GB
erigon  | [INFO] [02-25|12:07:15.872] [snapshots] no metadata yet              files=62 list=v1-024500-024600-headers.idx,v1-023100-023200-headers.idx,v1-023000-023100-bodies.seg,v1-035100-035200-headers.idx,v1-041900-042000-headers.seg,...
erigon  | [INFO] [02-25|12:07:15.872] [snapshots] no progress yet              files=32 list=v1-031300-031400-bodies.seg,v1-039100-039200-bodies.seg,v1-025900-026000-bodies.seg,v1-006900-007000-headers.idx,v1-033600-033700-headers.idx,...
erigon  | [INFO] [02-25|12:07:35.856] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h55m0s download-rate=0B/s completion-rate=0B/s alloc=378.9MB sys=2.9GB
erigon  | [INFO] [02-25|12:07:35.873] [snapshots] no metadata yet              files=62 list=v1-005800-005900-bodies.idx,v1-008100-008200-headers.idx,v1-026700-026800-bodies.seg,v1-047400-047500-headers.seg,v1-036800-036900-headers.idx,...
erigon  | [INFO] [02-25|12:07:35.873] [snapshots] no progress yet              files=32 list=v1-041300-041400-bodies.idx,v1-046500-046600-headers.idx,v1-038400-038500-bodies.idx,v1-036700-036800-bodies.seg,v1-044000-044100-headers.seg,...
erigon  | [INFO] [02-25|12:07:55.857] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h55m20s download-rate=0B/s completion-rate=0B/s alloc=245.3MB sys=2.9GB
erigon  | [INFO] [02-25|12:07:55.877] [snapshots] no metadata yet              files=62 list=v1-007300-007400-bodies.idx,v1-007400-007500-headers.idx,v1-029500-029600-bodies.seg,v1-033800-033900-headers.seg,v1-024500-024600-headers.idx,...
erigon  | [INFO] [02-25|12:07:55.877] [snapshots] no progress yet              files=32 list=v1-013900-014000-bodies.seg,v1-006300-006400-bodies.idx,v1-008600-008700-headers.seg,v1-044000-044100-bodies.idx,v1-037400-037500-headers.seg,...
erigon  | [INFO] [02-25|12:08:15.857] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h55m40s download-rate=0B/s completion-rate=0B/s alloc=400.8MB sys=2.9GB
erigon  | [INFO] [02-25|12:08:15.874] [snapshots] no metadata yet              files=62 list=v1-026700-026800-bodies.seg,v1-047400-047500-headers.seg,v1-036800-036900-headers.idx,v1-027200-027300-headers.idx,v1-013300-013400-bodies.idx,...
erigon  | [INFO] [02-25|12:08:15.874] [snapshots] no progress yet              files=32 list=v1-044000-044100-headers.seg,v1-019400-019500-bodies.seg,v1-043600-043700-bodies.idx,v1-046600-046700-headers.idx,v1-040000-040100-headers.idx,...
erigon  | [INFO] [02-25|12:08:35.857] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h56m0s download-rate=0B/s completion-rate=0B/s alloc=329.0MB sys=2.9GB
erigon  | [INFO] [02-25|12:08:35.872] [snapshots] no metadata yet              files=62 list=v1-008100-008200-headers.idx,v1-026700-026800-bodies.seg,v1-047400-047500-headers.seg,v1-036800-036900-headers.idx,v1-027200-027300-headers.idx,...
erigon  | [INFO] [02-25|12:08:35.872] [snapshots] no progress yet              files=32 list=v1-038400-038500-bodies.idx,v1-036700-036800-bodies.seg,v1-044000-044100-headers.seg,v1-019400-019500-bodies.seg,v1-043600-043700-bodies.idx,...
erigon  | [INFO] [02-25|12:08:55.857] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h56m20s download-rate=0B/s completion-rate=0B/s alloc=365.5MB sys=2.9GB
erigon  | [INFO] [02-25|12:08:55.876] [snapshots] no metadata yet              files=62 list=v1-003900-004000-bodies.idx,v1-046800-046900-bodies.idx,v1-024900-025000-headers.seg,v1-026300-026400-bodies.seg,v1-027400-027500-headers.seg,...
erigon  | [INFO] [02-25|12:08:55.876] [snapshots] no progress yet              files=32 list=v1-019400-019500-bodies.seg,v1-043600-043700-bodies.idx,v1-046600-046700-headers.idx,v1-040000-040100-headers.idx,v1-030900-031000-bodies.idx,...
erigon  | [INFO] [02-25|12:09:15.856] [1/9 OtterSync] Downloading              progress="(1863/1925 files) 99.04% - 16.1GB/16.3GB" time-left=999hrs:99m total-time=3h56m40s download-rate=0B/s completion-rate=0B/s alloc=228.5MB sys=2.9GB
erigon  | [INFO] [02-25|12:09:15.871] [snapshots] no metadata yet              files=62 list=v1-005200-005300-bodies.idx,v1-036800-036900-bodies.seg,v1-000200-000300-bodies.seg,v1-004700-004800-headers.seg,v1-026200-026300-headers.seg,...
erigon  | [INFO] [02-25|12:09:15.871] [snapshots] no progress yet              files=32 list=v1-039100-039200-bodies.seg,v1-025900-026000-bodies.seg,v1-033600-033700-headers.idx,v1-038200-038300-bodies.seg,v1-006900-007000-headers.idx,...
```

error
```
erigon  | 2025/02/25 13:09:51 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:51 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:51 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:51 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:53 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:53 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:53 RoundTripper returned a response & error; ignoring response
erigon  | 2025/02/25 13:09:53 RoundTripper returned a response & error; ignoring response
```## Comments

This issue has 21 comments. View them at https://github.com/node-real/bsc-erigon/issues/626.

