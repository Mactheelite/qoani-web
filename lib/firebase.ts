import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, doc, getDoc, addDoc, updateDoc, deleteDoc, Timestamp } from 'firebase/firestore';

if (typeof window === 'undefined') {
  // We're in Node.js (scripts)
  require('dotenv').config();
}

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// TypeScript interface for blog posts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// Fetch all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  try {

    const blogCollection = collection(db, 'blogPosts');
    
    // Try with orderBy first
    try {

      const blogQuery = query(blogCollection, orderBy('createdAt', 'desc'));
      const blogSnapshot = await getDocs(blogQuery);
      const posts = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[];
 
      return posts;
    } catch (orderError) {
      // If orderBy fails (no index or no createdAt field), fetch without ordering
      const blogSnapshot = await getDocs(blogCollection);
      
      const posts = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as BlogPost[];
      return posts;
    }
  } catch (error) {
    return [];
  }
};

// Fetch a single blog post by ID
export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    const blogDoc = doc(db, 'blogPosts', id);
    const blogSnapshot = await getDoc(blogDoc);
    
    if (blogSnapshot.exists()) {
      return {
        id: blogSnapshot.id,
        ...blogSnapshot.data(),
      } as BlogPost;
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Add a new blog post (for admin use)
export const addBlogPost = async (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string | null> => {
  try {
    const blogCollection = collection(db, 'blogPosts');
    
    // Prepare the document data with only the fields we want
    const docData = {
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      author: post.author,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };
    
    const docRef = await addDoc(blogCollection, docData);
    console.log('✅ Successfully added document with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('❌ Error adding blog post:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return null;
  }
};

// Update an existing blog post (for admin use)
export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<boolean> => {
  try {
    const blogDoc = doc(db, 'blogPosts', id);
    await updateDoc(blogDoc, {
      ...updates,
      updatedAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return false;
  }
};

// Delete a blog post (for admin use)
export const deleteBlogPost = async (id: string): Promise<boolean> => {
  try {
    const blogDoc = doc(db, 'blogPosts', id);
    await deleteDoc(blogDoc);
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return false;
  }
};

export { db, app };
