const data = {
  flasks: [
    {
      displayName: 'Static Empowerment',
      simName: 'Static',
      profilesetString: 'flask=phial_of_static_empowerment_3'
    },
    {
      displayName: 'Tepid Versatility',
      simName: 'Tepid',
      profilesetString: 'flask=phial_of_tepid_versatility_3',
    },
    {
      displayName: 'Elemental Chaos',
      simName: 'Chaos',
      profilesetString: 'flask=phial_of_elemental_chaos_3',
    },
    {
      displayName: 'Corrupting Rage',
      simName: 'Rage',
      profilesetString: 'flask=iced_phial_of_corrupting_rage_3',
    },
  ],
  runes: [
    {
      displayName: 'Howling Rune (haste) (main hand)',
      simName: 'Howling',
      profilesetString: 'temporary_enchant=main_hand:howling_rune_3',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:howling_rune_3',
        }
      }
    },
    
    {
      displayName: 'Hissing Rune (mastery) (main hand)',
      simName: 'Hissing',
      profilesetString: 'temporary_enchant=main_hand:hissing_rune_3',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:hissing_rune_3',
        }
      }
    },
    
    {
      displayName: 'Buzzing Rune (crit) (main hand)',
      simName: 'Buzzing',
      profilesetString: 'temporary_enchant=main_hand:buzzing_rune_3',
      additionalParams: {
        includeOffhand: {
          inline: true,
          profilesetString: '/off_hand:buzzing_rune_3',
        }
      }
    },
  ],
  essenceTrinket: [
    {
      displayName: 'Bronze (haste)',
      simName: 'Bronze',
      profilesetString: 'dragonflight.ominous_chromatic_essence_dragonflight=bronze',
    },
    {
      displayName: 'Azure (mastery)',
      simName: 'Azure',
      profilesetString: 'dragonflight.ominous_chromatic_essence_dragonflight=azure',
    },
    {
      displayName: 'Emerald (crit)',
      simName: 'Emerald',
      profilesetString: 'dragonflight.ominous_chromatic_essence_dragonflight=emerald',
    },
    {
      displayName: 'Ruby (vers)',
      simName: 'Ruby',
      profilesetString: 'dragonflight.ominous_chromatic_essence_dragonflight=ruby',
    },
    {
      displayName: 'Obsidian (all stats)',
      simName: 'Obsidian',
      profilesetString: 'dragonflight.ominous_chromatic_essence_dragonflight=obsidian',
    },
  ],
  food: [
    {
      displayName: 'Main Stat',
      simName: 'Feast',
      profilesetString: 'food=fated_fortune_cookie'
    },
    {
      displayName: 'Haste>Vers',
      simName: 'SeafoodPlatter',
      profilesetString: 'food=aromatic_seafood_platter',
    },
    {
      displayName: 'Haste>Crit',
      simName: 'FishSticks',
      profilesetString: 'food=feisty_fish_sticks',
    },
    {
      displayName: 'Vers>Mast',
      simName: 'CeruleanSea',
      profilesetString: 'food=great_cerulean_sea',
    },   
    {
      displayName: 'Crit>Vers',
      simName: 'Revenge',
      profilesetString: 'food=revenge_served_cold',
    },    
    {
      displayName: 'Haste>Mast',
      simName: 'SeafoodMedley',
      profilesetString: 'food=sizzling_seafood_medley',
    },    
    {
      displayName: 'Crit>Mast',
      simName: 'Tongueslicer',
      profilesetString: 'food=thousandbone_tongueslicer',
    },
  ],
}

export default data;