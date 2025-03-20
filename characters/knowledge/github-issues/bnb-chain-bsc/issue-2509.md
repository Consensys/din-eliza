# [bsc] perf: optimize chain commit performance for multi-database

- **Issue**: #2509
- **Status**: closed
- **Created**: 6/6/2024, 3:32:00 AM
- **Updated**: 2/18/2025, 10:20:22 PM
- **URL**: https://github.com/bnb-chain/bsc/pull/2509

## Description

### Description

In a multi-database, the performance of the chain commit process degrades. The chain commit process mainly involves writing data; the performance drops when using multiple databases.

### Rationale

Optimization
* The BlockStore makes multiple calls to the rawdb interface, performing multiple batch writes. Encapsulating these into a single batch will improve performance.
* Currently, the process writes to BlockStore first and then to chaindb in a sequential manner. Parallelizing these two database writes using go routines will optimize the write process.

Impact
These optimizations result in a 10% performance improvement during the commit phase in a multi-database setup.
### Example

add an example CLI or API response...

### Changes

Notable changes: 
* add each change in a bullet point here
* ...
