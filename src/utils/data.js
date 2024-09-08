const data = {
  flasks: [
    {
      displayName: 'Alchemical Chaos (Rotating)',
      simName: 'Alchemical Chaos',
      profilesetString: 'flask=flask_of_alchemical_chaos_3'
    },
    {
      displayName: 'Crit Flask',
      simName: 'CritFlask',
      profilesetString: 'flask=flask_of_tempered_aggression_3'
    },
    {
      displayName: 'Haste Flask',
      simName: 'HasteFlask',
      profilesetString: 'flask=flask_of_tempered_swiftness_3'
    },
    {
      displayName: 'Mastery Flask',
      simName: 'MasteryFlask',
      profilesetString: 'flask=flask_of_tempered_mastery_3'
    },
    {
      displayName: 'Vers Flask',
      simName: 'VersFlask',
      profilesetString: 'flask=flask_of_tempered_versatility_3'
    },
  ],
  potions: [
    {
      displayName: 'Tempered Potion',
      simName: 'Tempered',
      profilesetString: 'potion=tempered_potion_3'
    },
    {
      displayName: 'Unwavering Focus',
      simName: 'Unwavering',
      profilesetString: 'potion=potion_of_unwavering_focus_3'
    },
    {
      displayName: 'Grotesque Vial',
      simName: 'Grotesque',
      profilesetString: 'potion=grotesque_vial_3'
    },
  ],
  runes: [
    {
      displayName: 'Ironclaw Whetstone (AP)',
      simName: 'Ironclaw',
      profilesetString: 'temporary_enchant=main_hand:ironclaw_whetstone_3',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:main_hand:ironclaw_whetstone_3',
        }
      }
    },
    {
      displayName: 'Oil of Deep Toxins (Damage)',
      simName: 'DeepToxins',
      profilesetString: 'temporary_enchant=oil_of_deep_toxins_3',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:oil_of_deep_toxins_3',
        }
      }
    },
    {
      displayName: 'Algari Mana Oil (Crit/Haste)',
      simName: 'ManaOil',
      profilesetString: 'temporary_enchant=algari_mana_oil_3',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:algari_mana_oil_3',
        }
      }
    },
  ],
  unboundChangeling: [
    {
      displayName: 'Haste',
      simName: 'HasteChangeling',
      profilesetString: 'shadowlands.unbound_changeling_stat_type=haste',
    },
    {
      displayName: 'Crit',
      simName: 'CritChangeling',
      profilesetString: 'shadowlands.unbound_changeling_stat_type=crit',
    },
    {
      displayName: 'Mastery',
      simName: 'MasteryChangeling',
      profilesetString: 'shadowlands.unbound_changeling_stat_type=mastery',
    },
    {
      displayName: 'All',
      simName: 'AllStatChangeling',
      profilesetString: 'shadowlands.unbound_changeling_stat_type=all',
    },
  ],
  food: [
    {
      displayName: 'Main Stat Feast (+445)',
      simName: 'PrimaryFood',
      profilesetString: 'food=feast_of_the_midnight_masquerade'
    },
    {
      displayName: 'Highest Secondary (+469)',
      simName: 'SecondaryFood',
      profilesetString: 'food=beledars_bounty'
    },
  ],
}

export default data;