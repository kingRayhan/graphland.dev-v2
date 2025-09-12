/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type CaseStudy = {
  __typename?: 'CaseStudy';
  content?: Maybe<CaseStudy_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageFieldOutput>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CaseStudyCreateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudyOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  index?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type CaseStudyUpdateArgs = {
  data: CaseStudyUpdateInput;
  where: CaseStudyWhereUniqueInput;
};

export type CaseStudyUpdateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  index?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudyWhereInput = {
  AND?: InputMaybe<Array<CaseStudyWhereInput>>;
  NOT?: InputMaybe<Array<CaseStudyWhereInput>>;
  OR?: InputMaybe<Array<CaseStudyWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  index?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type CaseStudyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CaseStudy_Content_Document = {
  __typename?: 'CaseStudy_content_Document';
  document: Scalars['JSON']['output'];
};


export type CaseStudy_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSearchFields: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createCaseStudies?: Maybe<Array<Maybe<CaseStudy>>>;
  createCaseStudy?: Maybe<CaseStudy>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createPost?: Maybe<Post>;
  createPosts?: Maybe<Array<Maybe<Post>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createTeam?: Maybe<Team>;
  createTeams?: Maybe<Array<Maybe<Team>>>;
  createTestimonial?: Maybe<Testimonial>;
  createTestimonials?: Maybe<Array<Maybe<Testimonial>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCaseStudies?: Maybe<Array<Maybe<CaseStudy>>>;
  deleteCaseStudy?: Maybe<CaseStudy>;
  deletePost?: Maybe<Post>;
  deletePosts?: Maybe<Array<Maybe<Post>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteTeam?: Maybe<Team>;
  deleteTeams?: Maybe<Array<Maybe<Team>>>;
  deleteTestimonial?: Maybe<Testimonial>;
  deleteTestimonials?: Maybe<Array<Maybe<Testimonial>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateCaseStudies?: Maybe<Array<Maybe<CaseStudy>>>;
  updateCaseStudy?: Maybe<CaseStudy>;
  updatePost?: Maybe<Post>;
  updatePosts?: Maybe<Array<Maybe<Post>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateTeam?: Maybe<Team>;
  updateTeams?: Maybe<Array<Maybe<Team>>>;
  updateTestimonial?: Maybe<Testimonial>;
  updateTestimonials?: Maybe<Array<Maybe<Testimonial>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateCaseStudiesArgs = {
  data: Array<CaseStudyCreateInput>;
};


export type MutationCreateCaseStudyArgs = {
  data: CaseStudyCreateInput;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreatePostsArgs = {
  data: Array<PostCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateTeamsArgs = {
  data: Array<TeamCreateInput>;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialCreateInput;
};


export type MutationCreateTestimonialsArgs = {
  data: Array<TestimonialCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCaseStudiesArgs = {
  where: Array<CaseStudyWhereUniqueInput>;
};


export type MutationDeleteCaseStudyArgs = {
  where: CaseStudyWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeletePostsArgs = {
  where: Array<PostWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteTeamsArgs = {
  where: Array<TeamWhereUniqueInput>;
};


export type MutationDeleteTestimonialArgs = {
  where: TestimonialWhereUniqueInput;
};


export type MutationDeleteTestimonialsArgs = {
  where: Array<TestimonialWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateCaseStudiesArgs = {
  data: Array<CaseStudyUpdateArgs>;
};


export type MutationUpdateCaseStudyArgs = {
  data: CaseStudyUpdateInput;
  where: CaseStudyWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostsArgs = {
  data: Array<PostUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateTeamsArgs = {
  data: Array<TeamUpdateArgs>;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialUpdateInput;
  where: TestimonialWhereUniqueInput;
};


export type MutationUpdateTestimonialsArgs = {
  data: Array<TestimonialUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  content?: Maybe<Post_Content_Document>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PostTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type PostTagsCountArgs = {
  where?: TagWhereInput;
};

export type PostCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostManyRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type PostRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
};

export type PostRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  create?: InputMaybe<Array<PostCreateInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Post_Content_Document = {
  __typename?: 'Post_content_Document';
  document: Scalars['JSON']['output'];
};


export type Post_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  caseStudies?: Maybe<Array<CaseStudy>>;
  caseStudiesCount?: Maybe<Scalars['Int']['output']>;
  caseStudy?: Maybe<CaseStudy>;
  keystone: KeystoneMeta;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Team>>;
  teamsCount?: Maybe<Scalars['Int']['output']>;
  testimonial?: Maybe<Testimonial>;
  testimonials?: Maybe<Array<Testimonial>>;
  testimonialsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryCaseStudiesArgs = {
  cursor?: InputMaybe<CaseStudyWhereUniqueInput>;
  orderBy?: Array<CaseStudyOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CaseStudyWhereInput;
};


export type QueryCaseStudiesCountArgs = {
  where?: CaseStudyWhereInput;
};


export type QueryCaseStudyArgs = {
  where: CaseStudyWhereUniqueInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type QueryPostsCountArgs = {
  where?: PostWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  orderBy?: Array<TeamOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TeamWhereInput;
};


export type QueryTeamsCountArgs = {
  where?: TeamWhereInput;
};


export type QueryTestimonialArgs = {
  where: TestimonialWhereUniqueInput;
};


export type QueryTestimonialsArgs = {
  cursor?: InputMaybe<TestimonialWhereUniqueInput>;
  orderBy?: Array<TestimonialOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TestimonialWhereInput;
};


export type QueryTestimonialsCountArgs = {
  where?: TestimonialWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
};


export type TagPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type TagPostsCountArgs = {
  where?: PostWhereInput;
};

export type TagCreateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Team = {
  __typename?: 'Team';
  bio?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  dribbble?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<ImageFieldOutput>;
  index?: Maybe<Scalars['Int']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  linkedin?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type TeamCreateInput = {
  bio?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  dribbble?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  index?: InputMaybe<Scalars['Int']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type TeamOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  designation?: InputMaybe<OrderDirection>;
  dribbble?: InputMaybe<OrderDirection>;
  facebook?: InputMaybe<OrderDirection>;
  github?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  index?: InputMaybe<OrderDirection>;
  instagram?: InputMaybe<OrderDirection>;
  linkedin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  twitter?: InputMaybe<OrderDirection>;
  website?: InputMaybe<OrderDirection>;
};

export type TeamUpdateArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};

export type TeamUpdateInput = {
  bio?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  dribbble?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<ImageFieldInput>;
  index?: InputMaybe<Scalars['Int']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  linkedin?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  designation?: InputMaybe<StringFilter>;
  dribbble?: InputMaybe<StringFilter>;
  facebook?: InputMaybe<StringFilter>;
  github?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  index?: InputMaybe<IntNullableFilter>;
  instagram?: InputMaybe<StringFilter>;
  linkedin?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  twitter?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  clientImage?: Maybe<ImageFieldOutput>;
  clientName?: Maybe<Scalars['String']['output']>;
  companyImage?: Maybe<ImageFieldOutput>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  designation?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  testimonial?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TestimonialCreateInput = {
  clientImage?: InputMaybe<ImageFieldInput>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  companyImage?: InputMaybe<ImageFieldInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  testimonial?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialOrderByInput = {
  clientName?: InputMaybe<OrderDirection>;
  companyName?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  designation?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  index?: InputMaybe<OrderDirection>;
  rating?: InputMaybe<OrderDirection>;
  testimonial?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type TestimonialUpdateArgs = {
  data: TestimonialUpdateInput;
  where: TestimonialWhereUniqueInput;
};

export type TestimonialUpdateInput = {
  clientImage?: InputMaybe<ImageFieldInput>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  companyImage?: InputMaybe<ImageFieldInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  designation?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  testimonial?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialWhereInput = {
  AND?: InputMaybe<Array<TestimonialWhereInput>>;
  NOT?: InputMaybe<Array<TestimonialWhereInput>>;
  OR?: InputMaybe<Array<TestimonialWhereInput>>;
  clientName?: InputMaybe<StringFilter>;
  companyName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  designation?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  index?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  testimonial?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type TestimonialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  posts?: Maybe<Array<Post>>;
  postsCount?: Maybe<Scalars['Int']['output']>;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: Array<PostOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: PostWhereInput;
};


export type UserPostsCountArgs = {
  where?: PostWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForCreateInput>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostRelateToManyForUpdateInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostManyRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TestimonialsQueryVariables = Exact<{
  orderBy: Array<TestimonialOrderByInput> | TestimonialOrderByInput;
}>;


export type TestimonialsQuery = { __typename?: 'Query', list?: Array<{ __typename?: 'Testimonial', id: string, clientName?: string | null, designation?: string | null, companyName?: string | null, index?: number | null, rating?: string | null, testimonial?: string | null, url?: string | null, clientImage?: { __typename?: 'ImageFieldOutput', id: string, extension: ImageExtension } | null }> | null };


export const TestimonialsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Testimonials"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialOrderByInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"list"},"name":{"kind":"Name","value":"testimonials"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clientName"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"clientImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}}]}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"testimonial"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<TestimonialsQuery, TestimonialsQueryVariables>;