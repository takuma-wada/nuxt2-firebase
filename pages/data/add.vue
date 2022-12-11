<template>
  <v-row align="center" style="height: 500px">
    <v-col align="center">
      <v-btn color="primary" @click="addData"> add Data </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";
export default {
data() {
  return {
    id: "001",
    title: "テスト",
  };
},
methods: {
  async addData() {
    try {
      const DB = getFirestore(this.$firebase);
      const docRef = await addDoc(collection(DB, "tasks"), {
        id: this.id,
        title: this.title,
      });
      console.log(docRef.id);
    } catch (e) {
      console.error("error", e);
    }
  },
},
};
</script>
