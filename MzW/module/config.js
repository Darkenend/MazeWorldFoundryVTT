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

MzW.ammunition = {
    type: {
        pistol: 'mzw.genericTerms.pistol',
        rifle: 'mzw.genericTerms.rifle',
        shotgun: 'mzw.genericTerms.shotgun',
        arrow: 'mzw.genericTerms.arrow',
        smallBolt: 'mzw.genericTerms.smallBolt',
        largeBolt: 'mzw.genericTerms.largeBolt',
        reloadPack: 'mzw.genericTerms.reloadPack'
    },
    caliber: {
        name: 'mzw.genericTerms.name',
        basePain: 'mzw.item.ammunition.caliber.basePain',
        notation: 'mzw.genericTerms.notation',
        recoil: 'mzw.item.ammunition.recoil',
        alternateNames: 'mzw.genericTerms.alternateNames'
    },
    damageTable: {
        type: 'mzw.genericTerms.damageTable.damageType.self',
        ldv: 'mzw.genericTerms.damageTable.ldv',
        c1: 'mzw.genericTerms.damageTable.c1',
        c2: 'mzw.genericTerms.damageTable.c2',
        a1: 'mzw.genericTerms.damageTable.a1',
        a2: 'mzw.genericTerms.damageTable.a2',
        a3: 'mzw.genericTerms.damageTable.a3',
        a4: 'mzw.genericTerms.damageTable.a4',
        a5: 'mzw.genericTerms.damageTable.a5'
    },
    projectileType: {
        fmj: {
            code: 'mzw.item.ammunition.projectileType.fmj.code',
            name: 'mzw.item.ammunition.projectileType.fmj.name'
        },
        t: {
            code: 'mzw.item.ammunition.projectileType.t.code',
            name: 'mzw.item.ammunition.projectileType.t.name'
        },
        match: {
            code: 'mzw.item.ammunition.projectileType.match.code',
            name: 'mzw.item.ammunition.projectileType.match.name'
        },
        lead: {
            code: 'mzw.item.ammunition.projectileType.lead.code',
            name: 'mzw.item.ammunition.projectileType.lead.name'
        },
        lswc: {
            code: 'mzw.item.ammunition.projectileType.lswc.code',
            name: 'mzw.item.ammunition.projectileType.lswc.name'
        },
        jhp: {
            code: 'mzw.item.ammunition.projectileType.jhp.code',
            name: 'mzw.item.ammunition.projectileType.jhp.name'
        },
        jsp: {
            code: 'mzw.item.ammunition.projectileType.jsp.code',
            name: 'mzw.item.ammunition.projectileType.jsp.name'
        },
        lswchp: {
            code: 'mzw.item.ammunition.projectileType.lswchp.code',
            name: 'mzw.item.ammunition.projectileType.lswchp.name'
        },
        hpx: {
            code: 'mzw.item.ammunition.projectileType.hpx.code',
            name: 'mzw.item.ammunition.projectileType.hpx.name'
        },
        ap: {
            code: 'mzw.item.ammunition.projectileType.ap.code',
            name: 'mzw.item.ammunition.projectileType.ap.name'
        },
        sap: {
            code: 'mzw.item.ammunition.projectileType.sap.code',
            name: 'mzw.item.ammunition.projectileType.sap.name'
        },
        apx: {
            code: 'mzw.item.ammunition.projectileType.apx.code',
            name: 'mzw.item.ammunition.projectileType.apx.name'
        },
        api: {
            code: 'mzw.item.ammunition.projectileType.api.code',
            name: 'mzw.item.ammunition.projectileType.api.name'
        },
        sf: {
            code: 'mzw.item.ammunition.projectileType.sf.code',
            name: 'mzw.item.ammunition.projectileType.sf.name'
        },
        uhs: {
            code: 'mzw.item.ammunition.projectileType.uhs.code',
            name: 'mzw.item.ammunition.projectileType.uhs.name'
        },
        buck: {
            code: 'mzw.item.ammunition.projectileType.buck.code',
            name: 'mzw.item.ammunition.projectileType.buck.name'
        },
        pBuck: {
            code: 'mzw.item.ammunition.projectileType.pBuck.code',
            name: 'mzw.item.ammunition.projectileType.pBuck.name'
        },
        rBuck: {
            code: 'mzw.item.ammunition.projectileType.rBuck.code',
            name: 'mzw.item.ammunition.projectileType.rBuck.name'
        },
        dBuck: {
            code: 'mzw.item.ammunition.projectileType.dBuck.code',
            name: 'mzw.item.ammunition.projectileType.dBuck.name'
        },
        slug: {
            code: 'mzw.item.ammunition.projectileType.slug.code',
            name: 'mzw.item.ammunition.projectileType.slug.name'
        },
        fSlug: {
            code: 'mzw.item.ammunition.projectileType.fSlug.code',
            name: 'mzw.item.ammunition.projectileType.fSlug.name'
        },
        rSlug: {
            code: 'mzw.item.ammunition.projectileType.rSlug.code',
            name: 'mzw.item.ammunition.projectileType.rSlug.name'
        },
        iSlug: {
            code: 'mzw.item.ammunition.projectileType.iSlug.code',
            name: 'mzw.item.ammunition.projectileType.iSlug.name'
        },
        hpSlug: {
            code: 'mzw.item.ammunition.projectileType.hpSlug.code',
            name: 'mzw.item.ammunition.projectileType.hpSlug.name'
        },
        apSlug: {
            code: 'mzw.item.ammunition.projectileType.apSlug.code',
            name: 'mzw.item.ammunition.projectileType.apSlug.name'
        },
        flech: {
            code: 'mzw.item.ammunition.projectileType.flech.code',
            name: 'mzw.item.ammunition.projectileType.flech.name'
        },
        frag: {
            code: 'mzw.item.ammunition.projectileType.frag.code',
            name: 'mzw.item.ammunition.projectileType.frag.name'
        },
        coin: {
            code: 'mzw.item.ammunition.projectileType.coin.code',
            name: 'mzw.item.ammunition.projectileType.coin.name'
        },
        fbang: {
            code: 'mzw.item.ammunition.projectileType.fbang.code',
            name: 'mzw.item.ammunition.projectileType.fbang.name'
        },
        tgas: {
            code: 'mzw.item.ammunition.projectileType.tgas.code',
            name: 'mzw.item.ammunition.projectileType.tgas.name'
        },
        nrm: {
            code: 'mzw.item.ammunition.projectileType.nrm.code',
            name: 'mzw.item.ammunition.projectileType.nrm.name'
        },
        brd: {
            code: 'mzw.item.ammunition.projectileType.brd.code',
            name: 'mzw.item.ammunition.projectileType.brd.name'
        },
        fld: {
            code: 'mzw.item.ammunition.projectileType.fld.code',
            name: 'mzw.item.ammunition.projectileType.fld.name'
        },
        imp: {
            code: 'mzw.item.ammunition.projectileType.imp.code',
            name: 'mzw.item.ammunition.projectileType.imp.name'
        },
        vnm: {
            code: 'mzw.item.ammunition.projectileType.vnm.code',
            name: 'mzw.item.ammunition.projectileType.vnm.name'
        },
        cya: {
            code: 'mzw.item.ammunition.projectileType.cya.code',
            name: 'mzw.item.ammunition.projectileType.cya.name'
        },
        tnq: {
            code: 'mzw.item.ammunition.projectileType.tnq.code',
            name: 'mzw.item.ammunition.projectileType.tnq.name'
        },
        xpl: {
            code: 'mzw.item.ammunition.projectileType.xpl.code',
            name: 'mzw.item.ammunition.projectileType.xpl.name'
        },
        effects: 'mzw.genericTerms.effects',
        value: 'mzw.genericTerms.value',
        description: 'mzw.genericTerms.description',
        notes: 'mzw.genericTerms.notes',
        projectiles: 'mzw.item.ammunition.projectiles'
    },
    powder: {
        pressure: {
            standard: 'mzw.item.ammunition.handloading.load.standard',
            cold: 'mzw.item.ammunition.handloading.load.cold',
            hot: 'mzw.item.ammunition.handloading.load.hot',
            super: 'mzw.item.ammunition.handloading.load.super'
        },
        quality: {
            reg: 'mzw.item.ammunition.handloading.powder.reg',
            surp: 'mzw.item.ammunition.handloading.powder.surp',
            prem: 'mzw.item.ammunition.handloading.powder.prem'
        }
    }
}

MzW.weapon = {
    manufacturer: 'mzw.item.weapon.name.manufacturer',
    model: 'mzw.item.weapon.name.model',
    country: 'mzw.genericTerms.country',
    year: 'mzw.genericTerms.year',
    class: {
        class1: 'mzw.item.weapon.class.1',
        class2: 'mzw.item.weapon.class.2',
        class3: 'mzw.item.weapon.class.3',
        class4: 'mzw.item.weapon.class.4',
        class5long: 'mzw.item.weapon.class.5long',
        class5short: 'mzw.item.weapon.class.5short',
        classHand: 'mzw.item.weapon.class.hand'
    },
    caliber: 'mzw.genericTerms.caliber',
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
            blunt: 'mzw.genericTerms.damageTable.damageType.blunt',
            sharp: 'mzw.genericTerms.damageTable.damageType.sharp',
            piercing: 'mzw.genericTerms.damageTable.damageType.piercing',
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
                exotic: 'mzw.genericTerms.exotic',
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
    weight: 'mzw.genericTerms.weight',
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