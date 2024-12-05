import { Client, Databases, Storage, Query, ID} from "appwrite";
import conf from "../conf/conf";

export class DatabaseService {
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async getPost(slug){
        try {
           return await this.databases.getDocument(conf.appWriteProjectDataBaseId, conf.appWriteProjectCollectionId, slug)
        } catch (error) {
            console.log("AppWrite services :: getPost() :: ", error);
            return false;
        }
    }

    async getPosts(query = [Query.equal("status", ["active"])]){

        try {
            return await this.databases.listDocuments(conf.appWriteProjectDataBaseId, conf.appWriteProjectCollectionId, query)
        } catch (error) {
            console.log("AppWrite services :: getPosts() :: ", error);
            return false;
        }

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteProjectDataBaseId,
                conf.appWriteProjectCollectionId,
                slug,
                {
                title,
                content,
                featuredImage,
                status,
                userId
            } )
        } catch (error) {
            console.log("AppWrite services :: createPost() :: ", error);
            return false;
        }
    }

    async updatePost(slug,{ title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteProjectDataBaseId,
                conf.appWriteProjectCollectionId,
                slug,
                {
                title,
                content,
                featuredImage,
                status
            } )
        } catch (error) {
            console.log("AppWrite services :: updatePost() :: ", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appWriteProjectDataBaseId,
                conf.appWriteProjectCollectionId,
                slug
            )
             return true;
        } catch (error) {
            console.log("AppWrite services :: deletePost() :: ", error);
            return false;
        }
    }

    // storage 

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite services :: uploadImage() :: ", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("AppWrite services :: deleteImage() :: ", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return  this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId,
        ).href
    }

}

const databaseService = new DatabaseService()

export default databaseService;













