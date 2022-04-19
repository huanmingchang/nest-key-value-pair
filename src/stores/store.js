import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const treeData = defineStore('treeData', {
  state: () => {
    return {
      root: [
        {
          id: uuidv4(),
          key: 'nav',
          children: [
            {
              id: uuidv4(),
              key: 'header',
              children: [
                {
                  id: uuidv4(),
                  key: 'creator',
                  value: '3D Fabric Creator',
                },
                {
                  id: uuidv4(),
                  key: 'product',
                  value: 'Product',
                },
              ],
            },
            {
              id: uuidv4(),
              key: 'icon',
              value: 'icon name',
            },
          ],
        },
        {
          id: uuidv4(),
          key: 'common',
          children: [
            {
              id: uuidv4(),
              key: 'feature',
              children: [
                {
                  id: uuidv4(),
                  key: 'experience',
                  value: 'Try It Now!',
                },
                {
                  id: uuidv4(),
                  key: 'chooseFabric',
                  value: 'Choose Fabric',
                },
              ],
            },
          ],
        },
      ],
    }
  },

  actions: {},
})
