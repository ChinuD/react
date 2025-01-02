import conf from '../conf/conf.js'
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
            .setKey('')
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteCollectionID,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch{
            console.error('Error updating post:', error);
            throw error;
        }
    }   

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        }catch{
            console.error('Error deleting post:', error);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        }catch{
            console.error('Error getting post:', error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
                10,
                0,

            )
        }catch{
            console.error('Error getting posts:', error);
            return false;
        }
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file,
            )
        }catch{
            console.error('Error uploading file:', error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
            return true;
        }catch{
            console.error('Error deleting file:', error);
            return false;
        }
    }

    getFilePreviewUrl(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service();
export default Service;

