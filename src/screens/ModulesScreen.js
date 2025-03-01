import React from 'react';
import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import ModuleCard from '../components/ModuleCard';
import Header from '../components/header';

const modules = [
  { id: '1', title: 'Introduction to ISL', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '2', title: 'Basic Fundamentals', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '3', title: 'Grammar-I', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '4', title: 'Basic Greetings & Common Phrases', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '5', title: 'Days, Months & Time', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '6', title: 'Family and Relationships', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '7', title: 'Education', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '8', title: 'Colors and Fruits', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '9', title: 'Festivals and Places', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
  { id: '10', title: 'Grammar-II', lessons: 10, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nfOaaMzgQAkozPmUyNZN6IVpZCFw2R.png' },
];

export default function ModulesScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={modules}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={styles.grid}
        renderItem={({ item }) => (
          <ModuleCard 
            id={item.id}
            title={item.title} 
            lessons={item.lessons} 
            image={item.image} 
            navigation={navigation} // Pass navigation
            accessibilityLabel={`Module ${item.title}, ${item.lessons} lessons`} 
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

