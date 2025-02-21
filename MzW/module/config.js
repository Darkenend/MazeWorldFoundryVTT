export const MzW = {};

MzW.itemType = {
    ammunition: 'mzw.item.itemType.ammunition',
    clothing: 'mzw.item.itemType.clothing',
    crafting: 'mzw.item.itemType.crafting',
    food: 'mzw.item.itemType.food',
    handloading: 'mzw.item.itemType.handloading',
    med: 'mzw.item.itemType.med',
    mushroom: 'mzw.item.itemType.mushroom',
    ore: 'mzw.item.itemType.ore',
    valuable: 'mzw.item.itemType.valuable',
    weapon: 'mzw.item.itemType.weapon',
    weaponAccessory: 'mzw.item.itemType.weaponAccessory',
    misc: 'mzw.item.itemType.misc'
}

MzW.weapon = {
    name: {
        manufacturer: 'mzw.item.weapon.name.manufacturer',
        model: 'mzw.item.weapon.name.model',
        country: 'mzw.item.weapon.name.country',
        year: 'mzw.item.weapon.name.year'
    },
    class: {
        class1: 'mzw.item.weapon.class.1',
        class2: 'mzw.item.weapon.class.2',
        class3: 'mzw.item.weapon.class.3',
        class4: 'mzw.item.weapon.class.4',
        class5long: 'mzw.item.weapon.class.5long',
        class5short: 'mzw.item.weapon.class.5short',
        classHand: 'mzw.item.weapon.class.hand'
    },
    caliber: 'mzw.item.weapon.caliber',
    weaponMode: {
        fireMode: {
            singleShot: 'mzw.item.weapon.weaponMode.fireMode.singleShot',
            singleShotWithMultiplier: 'mzw.item.weapon.weaponMode.fireMode.singleShotWithMultiplier',
            boltAction: 'mzw.item.weapon.weaponMode.fireMode.boltAction',
            singleAction: 'mzw.item.weapon.weaponMode.fireMode.singleAction',
            leverAction: 'mzw.item.weapon.weaponMode.fireMode.leverAction',
            pumpAction: 'mzw.item.weapon.weaponMode.fireMode.pumpAction',
            pumpActionWithMultiplier: 'mzw.item.weapon.weaponMode.fireMode.pumpActionWithMultiplier',
            semiAuto: 'mzw.item.weapon.weaponMode.fireMode.semiAuto',
            doubleAction: 'mzw.item.weapon.weaponMode.fireMode.doubleAction',
            burst: 'mzw.item.weapon.weaponMode.fireMode.burst',
            fullAuto: 'mzw.item.weapon.weaponMode.fireMode.fullAuto',
            flame: 'mzw.item.weapon.weaponMode.fireMode.flame',
            notApplicable: 'mzw.genericTerms.notApplicable'
        },
        meleeMode: {
            blunt: 'mzw.item.weapon.weaponMode.meleeMode.blunt',
            sharp: 'mzw.item.weapon.weaponMode.meleeMode.sharp',
            piercing: 'mzw.item.weapon.weaponMode.meleeMode.piercing',
            notApplicable: 'mzw.genericTerms.notApplicable',
            skillType: {
                archery: 'mzw.item.weapon.meleeMode.skillType.archery',
                axe: 'mzw.item.weapon.meleeMode.skillType.axe',
                clubOneHand: 'mzw.item.weapon.meleeMode.skillType.clubOneHand',
                clubTwoHand: 'mzw.item.weapon.meleeMode.skillType.clubTwoHand',
                crude: 'mzw.item.weapon.meleeMode.skillType.crude',
                knife: 'mzw.item.weapon.meleeMode.skillType.knife',
                swordOneHand: 'mzw.item.weapon.meleeMode.skillType.swordOneHand',
                swordTwoHand: 'mzw.item.weapon.meleeMode.skillType.swordTwoHand',
                polearm: 'mzw.item.weapon.meleeMode.skillType.polearm',
                lash: 'mzw.item.weapon.meleeMode.skillType.lash',
                exotic: 'mzw.item.weapon.meleeMode.skillType.exotic',
                thrown: 'mzw.item.weapon.meleeMode.skillType.thrown',
                martialArts: 'mzw.item.weapon.meleeMode.skillType.martialArts'
            }
        }
    },
    autoROF: 'mzw.item.weapon.autoROF',
    stock: {
        fixed: 'mzw.item.weapon.stock.fixed',
        folding: 'mzw.item.weapon.stock.folding',
        retractable: 'mzw.item.weapon.stock.retractable',
        foldingRetractable: 'mzw.item.weapon.stock.foldingRetractable',
        noStock: 'mzw.item.weapon.stock.noStock',
        notApplicable: 'mzw.genericTerms.notApplicable'
    },
    feedingSystem: {
        magazine: 'mzw.item.weapon.feedingSystem.magazine',
        stripperClip: 'mzw.item.weapon.feedingSystem.stripperClip',
        speedloader: 'mzw.item.weapon.feedingSystem.speedloader',
        moonClip: 'mzw.item.weapon.feedingSystem.moonClip',
        speedStrip: 'mzw.item.weapon.feedingSystem.speedStrip',
        nonDisintegrating: 'mzw.item.weapon.feedingSystem.ammoBelt.nonDisintegrating',
        disintegrating: 'mzw.item.weapon.feedingSystem.ammoBelt.disintegrating',
        looseBelt: 'mzw.item.weapon.feedingSystem.ammoBelt.looseBelt',
        ammoBelt: 'mzw.item.weapon.feedingSystem.ammoBelt.self',
        reloadPack: 'mzw.item.weapon.feedingSystem.reloadPack',
    },
    plusOne: 'mzw.item.weapon.plusOne',
    critFail: {
        firearm: {
            ejectFailure: 'mzw.item.weapon.critFail.firearm.ejectFailure',
            feedFailure: 'mzw.item.weapon.critFail.firearm.feedFailure',
            fireFailure: 'mzw.item.weapon.critFail.firearm.fireFailure',
            burnFailure: 'mzw.item.weapon.critFail.firearm.burnFailure'
        }
    },
    rarity: {
        shopValue: 'mzw.item.weapon.rarity.shopValue',
        rarity: 'mzw.item.weapon.rarity.self',
    },
    weight: 'mzw.item.weapon.weight',
    condition: {
        current: 'mzw.item.weapon.condition.current',
        max: 'mzw.item.weapon.condition.max'
    },
    accessoryCompatibility: {
        feeding: 'mzw.item.weapon.accessoryCompatibility.feeding',
        muzzle: 'mzw.item.weapon.accessoryCompatibility.muzzle',
        optics: 'mzw.item.weapon.accessoryCompatibility.optics',
        underbarrel: 'mzw.item.weapon.accessoryCompatibility.underbarrel',
        lights: 'mzw.item.weapon.accessoryCompatibility.lights'
    },
    mazeCustomsFamily: {
        SS1911: 'mzw.item.weapon.mazeCustomsFamily.SS1911',
        DS1911: 'mzw.item.weapon.mazeCustomsFamily.DS1911',
        blackhawk: 'mzw.item.weapon.mazeCustomsFamily.blackhawk',
        redhawk: 'mzw.item.weapon.mazeCustomsFamily.redhawk',
        glockSF: 'mzw.item.weapon.mazeCustomsFamily.glockSF',
        glockLF: 'mzw.item.weapon.mazeCustomsFamily.glockLF',
        mp5: 'mzw.item.weapon.mazeCustomsFamily.mp5',
        ar15: 'mzw.item.weapon.mazeCustomsFamily.ar15',
        ak: 'mzw.item.weapon.mazeCustomsFamily.ak',
        ar10: 'mzw.item.weapon.mazeCustomsFamily.ar10',
        rem700: 'mzw.item.weapon.mazeCustomsFamily.rem700',
        ba: 'mzw.item.weapon.mazeCustomsFamily.ba'
    }
}