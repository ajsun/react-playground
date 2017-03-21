const defaultState = {
    currentAsset: '',
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case 'assetSetCurrent':
            return { ...state, currentAsset: action.data }
        default:
            return state
    }
}
