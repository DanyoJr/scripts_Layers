function potatoes(p0, w0, p1) {
    
   
    let matterPerc = 100 - p0
    let finalMatterPerc = 100 - p1

    let dryMatterKG = w0 * (matterPerc / 100)

    let finalWeight =  dryMatterKG / (finalMatterPerc / 100)

    return Math.floor(finalWeight)
}

potatoes(93, 129, 91)
