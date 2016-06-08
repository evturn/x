function createInitialState(data) {
  const topLevelRecords = data.filter(x => x.parent === undefined)
  const getImmediateChildren = parent => data.filter(x => x.parent === parent.id)

  function buildRecordMap(records) {
    return records.map(x => {
      x.records = getImmediateChildren(x)
      if (x.records.length > 0) {
        buildRecordMap(x.records)
      }

      return x
    })
  }

  return buildRecordMap(topLevelRecords)
}

export default createInitialState
