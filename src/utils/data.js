const data ={
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
}

export default data;